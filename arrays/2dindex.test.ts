import {
  assertEquals,
  equal,
} from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as md from "./2dindex.ts";

Deno.test("flip an image", () => {
  equal(
    [
      [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ],
    ],
    md.flipAndInvertimage([
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 0],
    ])
  );
});

Deno.test("minimum time visiting all points", () => {
  assertEquals(
    7,
    md.minTimeToVisitAllPoints([
      [1, 1],
      [3, 4],
      [-1, 0],
    ])
  );
});

Deno.test("matrix diagonal sum", () => {
  assertEquals(
    25,
    md.diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  );
});
