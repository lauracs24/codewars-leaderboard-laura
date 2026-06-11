# Testing

## Comma-separated username input

I manually tested the deployed website by entering:

`SallyMcGrath,CodeYourFuture,40thieves`

Submitting the form successfully fetched and displayed all three users.

## Fetching Codewars user data

I tested valid usernames including:

* `CodeYourFuture`
* `SallyMcGrath`
* `40thieves`

The application fetched current data from the Codewars API and displayed each user's username, clan, and score.

## Overall ranking shown by default

After submitting usernames, I confirmed that the ranking dropdown defaulted to `Overall` and displayed the users' scores.

## Language ranking dropdown

I confirmed that the dropdown was populated with the languages found in the fetched users' ranking data.

I manually selected rankings including JavaScript, SQL, Go, and TypeScript and confirmed that the table updated.

## Updating the table when the ranking changes

I changed the selected ranking from Overall to individual languages and confirmed that the displayed users and scores changed to match the selected ranking.

## Username, clan, and score columns

I confirmed that the table displayed the following columns:

* Username
* Clan
* Score

## Sorting from highest to lowest score

Unit tests in `index.test.mjs`.

The unit test checks that `sortUsersByRanking()` sorts users from the highest overall score to the lowest overall score.

This function is imported and used by the application when displaying the leaderboard.

I also manually tested:

`SallyMcGrath,CodeYourFuture,40thieves`

The results appeared in descending score order.

## Users without the selected language ranking

I selected SQL, Go, and TypeScript rankings and confirmed that users without a ranking in the chosen language were not displayed.

## Highlighting the top user

I confirmed that the first and highest-scoring user was displayed with a bold, gold-highlighted row.

## Invalid usernames

I searched for:

`bob`

The page displayed:

`Could not find bob`

The previous table data was cleared and the dropdown was reset to Overall.

## Fetch and network errors

Using Chrome DevTools, I changed the Network setting to Offline and submitted a valid username.

The page displayed:

`Failed to fetch`

The application did not crash or continue displaying old results.

## Accessibility

I ran Lighthouse Accessibility using **Snapshot mode** on the deployed website.

I tested the following page states:

* A leaderboard containing three users
* A language-filtered leaderboard
* The invalid-user error state

All tested states passed 21 out of 21 automated accessibility checks and received an Accessibility score of 100.

The page includes:

* Associated labels for form controls
* Semantic table headings
* A table caption
* A main landmark
* A live status message

## Automated test commands

I ran:

`npm install`

followed by:

`npm test`

The installation completed successfully and the unit test passed with zero failures.

