import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as sw from "./slidingWindow.js";

Deno.test("maximum sum of k consecutive elements", () => {
  assertEquals(0, sw.__maxSumOfKConsecutiveElements([], 2));
  assertEquals(700, sw.__maxSumOfKConsecutiveElements([100, 200, 300, 400], 2));
  assertEquals(
    39,
    sw.__maxSumOfKConsecutiveElements([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)
  );
});
