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

Deno.test("the k weakest rows in a matrix", () => {
  assertEquals(
    [2, 0, 3],
    _2darray.kWeakestRows(
      [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1],
      ],
      3
    )
  );
});

Deno.test("maximum units on a truck", () => {
  assertEquals(
    8,
    _2darray.maximumUnits(
      [
        [1, 3],
        [2, 2],
        [3, 1],
      ],
      4
    )
  );
});

Deno.test("lucky numbers in a matrix", () => {
  assertEquals([], _2darray.luckyNumbers([]));
  assertEquals(
    [15],
    _2darray.luckyNumbers([
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ])
  );
});

Deno.test("minimum absolute difference", () => {
  // assertEquals([[]], _2darray.minimumAbsDifference([]));
  assertEquals(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    _2darray.minimumAbsDifference([4, 2, 1, 3])
  );
});

Deno.test("intersection of multiple arrays", () => {
  assertEquals(
    [3, 4],
    _2darray.intersection([
      [3, 1, 2, 4, 5],
      [1, 2, 3, 4],
      [3, 4, 5, 6],
    ])
  );
});
