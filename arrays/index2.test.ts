import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as array from "./index2.ts";

Deno.test("shuffle string", () => {
  assertEquals(
    "leetcode",
    array.restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
  );
});

Deno.test("create target array in the given order", () => {
  assertEquals(
    [0, 4, 1, 3, 2],
    array.createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])
  );
});

Deno.test("count items matching a rule", () => {
  assertEquals(
    2,
    array.countMatches(
      [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "phone"],
        ["phone", "gold", "iphone"],
      ],
      "type",
      "phone"
    )
  );
});

Deno.test("sum of all odd length subarrays", () => {
  assertEquals(58, array.sumOddLengthSubarrays([1, 4, 2, 5, 3]));
});

Deno.test("count number pairs with absolute difference K", () => {
  assertEquals(4, array.countKDifference([1, 2, 2, 1], 1));
});

Deno.test("minimum number of moves to seat everyone", () => {
  assertEquals(4, array.minMovesToSeat([3, 1, 5], [2, 7, 4]));
});

Deno.test("check if two string arrays are equivalent", () => {
  assertEquals(true, array.arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
});

Deno.test("count the number of consistent strings", () => {
  assertEquals(
    2,
    array.countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])
  );

  assertEquals(
    7,
    array.countConsistentStrings("abc", [
      "a",
      "b",
      "c",
      "ab",
      "ac",
      "bc",
      "abc",
    ])
  );
});

Deno.test("maximum product difference between two pairs", () => {
  assertEquals(34, array.maxProductDifference([5, 6, 2, 7, 4]));
  assertEquals(64, array.maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
});