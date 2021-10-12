import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { reSum, sum, generateRows, guessNumber } from "./index.ts";
Deno.test("sum", () => {
  assertEquals(0, sum([]));
  assertEquals(10, sum([10]));
  assertEquals(15, sum([4, 5, 6]));
  assertEquals(79, sum([22, 12, 22, 22, 1]));
});

Deno.test("recursive sum", () => {
  assertEquals(0, reSum([]));
  assertEquals(10, reSum([10]));
  assertEquals(15, reSum([4, 5, 6]));
  assertEquals(79, reSum([22, 12, 22, 22, 1]));
});

Deno.test("Pascal's triangle", () => {
  assertEquals([[1]], generateRows());
  assertEquals([[1], [1, 1], [1, 2, 1]], generateRows(3));
});

Deno.test("guess number higher or lower", () => {
  assertEquals(-1, guessNumber(10));
});
