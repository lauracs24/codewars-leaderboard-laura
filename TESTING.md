# Testing

## Comma-separated usernames

I tested the form with:

`SallyMcGrath,CodeYourFuture,40thieves`

All three users were fetched and shown in the leaderboard.

## Fetching user data

I tested the app with these valid Codewars usernames:

* `CodeYourFuture`
* `SallyMcGrath`
* `40thieves`

For each user, the app showed their username, clan and score.

## Default ranking

After loading users, the dropdown showed `Overall` by default and displayed the overall scores.

## Language dropdown

I checked that the dropdown was filled with the languages found in the users' Codewars data.

I tested JavaScript, SQL, Go and TypeScript. The table changed each time to show the correct ranking.

## Table updates

I switched between Overall and different language rankings and checked that the users and scores updated correctly.

## Table columns

I checked that the table included:

* Username
* Clan
* Score

## Sorting

Unit tests in `index.test.mjs`.

The test checks that `sortUsersByRanking()` puts users in order from highest score to lowest score.

This function is also used by the main app when the leaderboard is displayed.

I also tested this manually with:

`SallyMcGrath,CodeYourFuture,40thieves`

The users appeared in the correct order.

## Users without a language ranking

I selected SQL, Go and TypeScript and checked that users without a ranking in that language were not shown.

## Top user highlight

I checked that the highest-scoring user was shown in a bold gold row.

## Invalid username

I searched for:

`bob`

The app showed:

`Could not find bob`

The previous results were cleared and the dropdown went back to Overall.

## Valid and invalid usernames together

I searched for:

`CodeYourFuture,bob`

The app showed:

`Could not find bob`

This made it clear which username could not be found, and the old results were cleared.

## Network error

In Chrome DevTools, I changed the Network setting to Offline and searched for a valid username.

The app showed:

`Failed to fetch`

The page did not crash and the old results were removed.

## Accessibility

I used Lighthouse in **Snapshot mode** on the deployed website.

I checked:

* The leaderboard with three users
* A language-filtered leaderboard
* The invalid-user error state

All three views passed 21 out of 21 accessibility checks and scored 100.

The page also includes labels for the form controls, table headings, a table caption, a main landmark and a live status message.

## Automated test

I ran:

`npm install`

and then:

`npm test`

The test passed with no failures.


