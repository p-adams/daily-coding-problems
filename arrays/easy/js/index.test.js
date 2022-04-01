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
