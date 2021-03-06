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

Deno.test("count good triplets", () => {
  assertEquals(4, array.countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
});

Deno.test("find target indices after sorting array", () => {
  assertEquals([1, 2], array.targetIndices([1, 2, 5, 2, 3], 2));
  assertEquals([3], array.targetIndices([1, 2, 5, 2, 3], 3));

  assertEquals([4], array.targetIndices([1, 2, 5, 2, 3], 5));
});

Deno.test("find first palindromic string in array", () => {
  assertEquals("ada", array.firstPalindrome(["abc", "ada", "racecar", "cool"]));
  assertEquals("racecar", array.firstPalindrome(["racecar", "cool"]));
  assertEquals("", array.firstPalindrome(["abbr", "cbb"]));
});

Deno.test("count equal and divisible pairs in an array", () => {
  assertEquals(4, array.countPairs([3, 1, 2, 2, 2, 1, 3], 2));
  assertEquals(0, array.countPairs([1, 2, 3, 4], 1));
});

Deno.test("unique morse code word", () => {
  assertEquals(
    2,
    array.uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])
  );
});

Deno.test("find the highest altitude", () => {
  assertEquals(1, array.largestAltitude([-5, 1, 5, 0, -7]));
});

Deno.test("sum of all subset XOR Totals", () => {
  assertEquals(6, array.subsetXORSum([1, 3]));
});

Deno.test("maximum product of two elements in an array", () => {
  assertEquals(12, array.maxProduct([3, 4, 5, 2]));
  assertEquals(16, array.maxProduct([1, 5, 4, 5]));
  assertEquals(12, array.maxProduct([3, 7]));
});

Deno.test("minimum operations to make the array increasing", () => {
  assertEquals(3, array.minOperations([1, 1, 1]));
  assertEquals(14, array.minOperations([1, 5, 2, 4, 1]));
  assertEquals(0, array.minOperations([8]));
});

Deno.test("find greatest common divisor of array", () => {
  assertEquals(2, array.findGCD([2, 5, 6, 9, 10]));
  assertEquals(1, array.findGCD([7, 5, 6, 8, 3]));
  assertEquals(3, array.findGCD([3, 3]));
});

Deno.test("counting words with a given prefix", () => {
  assertEquals(
    2,
    array.prefixCount(["pay", "attention", "practice", "attend"], "at")
  );
});

Deno.test("divide array into equal pairs", () => {
  assertEquals(true, array.divideArray([3, 2, 3, 2, 2, 2]));
});
