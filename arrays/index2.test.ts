import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as array from "./index2.ts";

Deno.test("shuffle string", () => {
  assertEquals(
    "leetcode",
    array.restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
  );
});

Deno.test("create target array in the given order", () => {
  assertEquals(
    [0, 4, 1, 3, 2],
    array.createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])
  );
});
