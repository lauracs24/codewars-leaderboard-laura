import test from "node:test";
import assert from "node:assert";
import { sortUsersByRanking } from "./logic.mjs";

test("sorts users from highest to lowest overall score", function () {
  let users = [
    {
      username: "Queen",
      ranks: {
        overall: {
          score: 100,
        },
      },
    },
    {
      username: "Biscuit",
      ranks: {
        overall: {
          score: 300,
        },
      },
    },
  ];

  let result = sortUsersByRanking(users, "overall");

  assert.equal(result[0].username, "Biscuit");
  assert.equal(result[1].username, "Queen");
});