import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
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
  assertEquals([], array.finalPrices([8, 4, 6, 2, 3]));
});
