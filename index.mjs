import { sortUsersByRanking } from "./logic.mjs";

let userForm = document.getElementById("userForm");
let usernamesInput = document.getElementById("usernames");
let message = document.getElementById("message");
let leaderboardBody = document.getElementById("leaderboardBody");
let languageSelect = document.getElementById("languageSelect");

let currentUsers = [];

async function getCodewarsUser(username) {
  let response = await fetch(
    `https://www.codewars.com/api/v1/users/${username}`
  );

  if (!response.ok) {
    throw new Error(`Could not find ${username}`);
  }

  let userData = await response.json();

  return userData;
}

function showLeaderboard(users, ranking) {
  let rankedUsers = users.filter(function (user) {
    if (ranking === "overall") {
      return true;
    }

    return user.ranks.languages[ranking] !== undefined;
  });

  rankedUsers = sortUsersByRanking(rankedUsers, ranking);

  leaderboardBody.innerHTML = "";

  rankedUsers.forEach(function (user, index) {
    let score;

    if (ranking === "overall") {
      score = user.ranks.overall.score;
    } else {
      score = user.ranks.languages[ranking].score;
    }

    leaderboardBody.innerHTML += `
      <tr class="${index === 0 ? "top-user" : ""}">
        <td>${user.username}</td>
        <td>${user.clan || ""}</td>
        <td>${score}</td>
      </tr>
    `;
  });
}

function addLanguageOptions(users) {
  let languages = new Set();

  users.forEach(function (user) {
    let userLanguages = Object.keys(user.ranks.languages);

    userLanguages.forEach(function (language) {
      languages.add(language);
    });
  });

  languageSelect.innerHTML = `
    <option value="overall">Overall</option>
  `;

  languages.forEach(function (language) {
    languageSelect.innerHTML += `
      <option value="${language}">${language}</option>
    `;
  });
}

userForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  let usernames = usernamesInput.value
    .split(",")
    .map(function (username) {
      return username.trim();
    });

  try {
    currentUsers = [];

    for (let username of usernames) {
      let user = await getCodewarsUser(username);
      currentUsers.push(user);
    }

    message.textContent = `Found ${currentUsers.length} users`;

    addLanguageOptions(currentUsers);
    showLeaderboard(currentUsers, "overall");
  } catch (error) {
    currentUsers = [];

    message.textContent = error.message;
    leaderboardBody.innerHTML = "";

    languageSelect.innerHTML = `
      <option value="overall">Overall</option>
    `;
  }
});

languageSelect.addEventListener("change", function () {
  showLeaderboard(currentUsers, languageSelect.value);
});