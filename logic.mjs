export function sortUsersByRanking(users, ranking) {
  return [...users].sort(function (a, b) {
    let scoreA;
    let scoreB;

    if (ranking === "overall") {
      scoreA = a.ranks.overall.score;
      scoreB = b.ranks.overall.score;
    } else {
      scoreA = a.ranks.languages[ranking].score;
      scoreB = b.ranks.languages[ranking].score;
    }

    return scoreB - scoreA;
  });
}