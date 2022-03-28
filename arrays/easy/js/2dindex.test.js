import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as _2darray from "./2dindex.js";
Deno.test("count negative numbers in a sorted matrix", () => {
  assertEquals(
    8,
    _2darray.countNegatives([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ])
  );
});
