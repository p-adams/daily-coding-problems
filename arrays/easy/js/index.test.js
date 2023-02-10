import {
  assertEquals,
  equal,
} from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as array from "./index.js";

Deno.test("find numbers with even number of digits", () => {
  assertEquals(2, array.findNumbers([12, 345, 2, 6, 7896]));
});

Deno.test("find n unique integers that sum up to 0", () => {
  assertEquals([0, 1, -1, 2, -2], array.sumZero(5));
});

Deno.test("number of workers doing work at a given time", () => {
  assertEquals(1, array.busyWorker([1, 2, 3], [3, 2, 7], 4));
  assertEquals(1, array.busyWorker([4], [4], 4));
});

Deno.test("DI String Match", () => {
  assertEquals([0, 4, 1, 3, 2], array.diStringMatch("IDID"));
});

Deno.test("array partition 1", () => {
  assertEquals(4, array.arrayPairSum([1, 4, 3, 2]));
});

Deno.test("sum of unique elements", () => {
  assertEquals(4, array.sumOfUnique([1, 2, 3, 2]));
});

Deno.test("n-repeated element in size 2n array", () => {
  assertEquals(3, array.repeatedNTimes([1, 2, 3, 3]));
});

Deno.test("final prices with a special discount in a shop", () => {
  equal([4, 2, 4, 2, 3], array.finalPrices([8, 4, 6, 2, 3]));
});

Deno.test("Sort Array By Parity", () => {
  assertEquals([2, 4, 3, 1], array.sortArrayByParity([3, 1, 2, 4]));
});

Deno.test("replace elements with greatest element on right side", () => {
  assertEquals(
    [18, 6, 6, 6, 1, -1],
    array.replaceElements([17, 18, 5, 4, 6, 1])
  );
});

Deno.test("height checker", () => {
  assertEquals(3, array.heightChecker([1, 1, 4, 2, 1, 3]));
});

Deno.test("keep multiplying found values by two", () => {
  assertEquals(24, array.findFinalValue([5, 3, 6, 1, 12], 3));
});

Deno.test("smallest index with equal value", () => {
  assertEquals(0, array.smallestEqual([0, 1, 2]));
  assertEquals(2, array.smallestEqual([4, 3, 2, 1]));
  assertEquals(-1, array.smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
});

Deno.test("kth distinct string in an array", () => {
  assertEquals("a", array.kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
  assertEquals("aaa", array.kthDistinct(["aaa", "aa", "a"], 1));
  assertEquals("", array.kthDistinct(["a", "b", "a"], 3));
});

Deno.test("two out of three", () => {
  assertEquals([], array.twoOutOfThree([], [], []));
  assertEquals([3, 2], array.twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
  assertEquals([3, 1, 2], array.twoOutOfThree([3, 1], [2, 3], [1, 2]));
});

Deno.test("minimum cost to move chips to same position", () => {
  assertEquals(1, array.minCostToMoveChips([1, 2, 3]));
});

Deno.test("make two arrays equal by reversing sub-arrays", () => {
  assertEquals(true, array.canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
});

Deno.test("minimum subsequence in non-increasing order", () => {
  assertEquals([10, 9], array.minSubsequence([4, 3, 10, 9, 8]));
});

Deno.test("unique number of occurences", () => {
  assertEquals(true, array.uniqueOccurrences([1, 2, 2, 1, 1, 3]));
  assertEquals(false, array.uniqueOccurrences([1, 2]));
  assertEquals(false, array.uniqueOccurrences([3, 5, -2, -3, -6, -6]));
});

Deno.test("sort integers by the number of 1 bits", () => {
  assertEquals(
    [0, 1, 2, 4, 8, 3, 5, 6, 7],
    array.sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])
  );
});

Deno.test("baseball game", () => {
  assertEquals(30, array.calPoints(["5", "2", "C", "D", "+"]));
  assertEquals(27, array.calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
});

Deno.test("build an array with stack operations", () => {
  assertEquals(["Push", "Push", "Pop", "Push"], array.buildArray([1, 3], 3));
});

Deno.test("shortest distance to a character", () => {
  assertEquals([3, 2, 1, 0], array.shortestToChar("aaab", "b"));
});

Deno.test("sort array by parity 2", () => {
  assertEquals([2, 7, 4, 5], array.sortArrayByParity2([4, 2, 5, 7]));
});

Deno.test("peak index in a mountain array", () => {
  assertEquals(1, array.peakIndexInMountainArray([0, 1, 0]));
});

Deno.test("count prefixes of a given string", () => {
  assertEquals(
    3,
    array.countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc")
  );
});

Deno.test("count common words with one occurence", () => {
  assertEquals(
    3,
    array.countWords(["foo", "bar", "baz"], ["foo", "bar", "baz"])
  );
  assertEquals(1, array.countWords(["a", "ab"], ["a", "a", "a", "ab"]));
});

Deno.test("number of arithmetic triplets", () => {
  assertEquals(2, array.arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
});

Deno.test("difference between element sum and digit sum of an array", () => {
  assertEquals(0, array.differenceOfSum([1, 2, 3, 4]));
  assertEquals(9, array.differenceOfSum([1, 15, 6, 3]));
});
