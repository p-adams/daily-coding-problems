import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { Day1 } from "./index.js";
Deno.test("Day 1: Binary Search", () => {
  // iterative
  assertEquals(4, Day1.binarySearch([-1, 0, 3, 5, 9, 12], 9));
  assertEquals(-1, Day1.binarySearch([-1, 0, 3, 5, 9, 12], 2));
  // recursive
  assertEquals(4, Day1.binarySearch2([-1, 0, 3, 5, 9, 12], 9));
  assertEquals(-1, Day1.binarySearch2([-1, 0, 3, 5, 9, 12], 2));
});
