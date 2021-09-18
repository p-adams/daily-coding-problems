import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { hourglassSum, leftRotate, intersection } from "./index.ts";
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
  assertEquals([2, 2], intersection([1, 2, 3], [2, 2]));
});
