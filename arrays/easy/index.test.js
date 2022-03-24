import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as array from "./index.js";

Deno.test("find numbers with even number of digits", () => {
  assertEquals(2, array.findNumbers([12, 345, 2, 6, 7896]));
});
