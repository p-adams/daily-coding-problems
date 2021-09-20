import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import {
  hourglassSum,
  leftRotate,
  intersection,
  pairSum,
  countingValleys,
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
});
