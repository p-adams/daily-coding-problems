import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import {
  hourglassSum,
  leftRotate,
  intersection,
  pairSum,
  countingValleys,
  jumpingOnClouds,
  containsDuplicates,
  containsDuplicates2,
  maxSubArray,
  maxConsecutiveOnes,
  singleNumber,
  plusOne,
  moveZeroes,
  rotateMatrix,
  validSudoku,
} from "./index.ts";
Deno.test("hourglass sum", () => {
  const m = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];
  assertEquals(28, hourglassSum(m));
});

Deno.test("left rotate", () => {
  assertEquals([2, 3, 1], leftRotate([1, 2, 3], 1));
  assertEquals([3, 4, 5, 1, 2], leftRotate([1, 2, 3, 4, 5], 2));
  assertEquals([5, 1, 2, 3, 4], leftRotate([1, 2, 3, 4, 5], 4));
});

Deno.test("intersection of two arrays", () => {
  assertEquals([1, 1], intersection([1, 1], [1, 1]));
  assertEquals([2], intersection([1, 2, 3], [2, 2]));
  assertEquals([], intersection([1, 2, 3], [4, 5, 6]));
  assertEquals([5], intersection([1, 2, 3, 5, 5, 5], [5]));
});

Deno.test("how many pairs exist in array", () => {
  assertEquals(3, pairSum([10, 20, 20, 10, 10, 30, 50, 10, 20]));
  assertEquals(0, pairSum([]));
  assertEquals(2, pairSum([1, 2, 1, 2, 1, 3, 2]));
});

Deno.test("number of valleys traversed", () => {
  assertEquals(0, countingValleys([]));
  assertEquals(1, countingValleys(["U", "D", "D", "D", "U", "D", "U", "U"]));
  assertEquals(1, countingValleys(["D", "U"]));
  assertEquals(2, countingValleys(["D", "D", "U", "U", "D", "D", "U", "U"]));
  assertEquals(1, countingValleys(["D", "D", "U", "U"]));
});

Deno.test("minimum number of jumps required from start to finish", () => {
  assertEquals(0, jumpingOnClouds([]));
  assertEquals(4, jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
});

Deno.test("contains duplicates", () => {
  assertEquals(false, containsDuplicates([]));
  assertEquals(true, containsDuplicates([1, 2, 3, 1]));
  assertEquals(false, containsDuplicates([1, 2, 3, 4]));
  assertEquals(true, containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
});

Deno.test("maximum subarray", () => {
  assertEquals(0, maxSubArray([]));
  assertEquals(1, maxSubArray([1]));
  assertEquals(3, maxSubArray([0, 3]));
  assertEquals(23, maxSubArray([5, 4, -1, 7, 8]));
});

Deno.test("max consecutive ones ", () => {
  assertEquals(0, maxConsecutiveOnes([]));
  assertEquals(3, maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
});

Deno.test("single number in array of pairs ", () => {
  assertEquals(1, maxConsecutiveOnes([2, 1, 2]));
});

Deno.test("find single number in unsorted array of pairs", () => {
  assertEquals(1, singleNumber([2, 1, 2]));
  assertEquals(100, singleNumber([200, 300, 300, 200, 100, -4, -4]));
});

Deno.test("plus one", () => {
  assertEquals([1], plusOne([0]));
  assertEquals([2, 4], plusOne([2, 3]));
  assertEquals([1, 0, 0, 0], plusOne([9, 9, 9]));
});

Deno.test("contains duplicates", () => {
  assertEquals(false, containsDuplicates2([1, 2, 3, 4]));
  assertEquals(true, containsDuplicates2([1, 1]));
});

Deno.test("move zeroes to end of array in-place", () => {
  assertEquals([0], moveZeroes([0]));
  assertEquals([1, 2, 0, 0], moveZeroes([1, 0, 2, 0]));
  assertEquals(
    [1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0],
    moveZeroes([0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7])
  );
});

Deno.test("rotate matrix clockwise", () => {
  assertEquals([[]], rotateMatrix([[]]));
  assertEquals(
    [
      [3, 1],
      [4, 2],
    ],
    rotateMatrix([
      [1, 2],
      [3, 4],
    ])
  );
});

Deno.test("is valid sudoku board", () => {
  assertEquals(
    true,
    validSudoku([
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  );
});
