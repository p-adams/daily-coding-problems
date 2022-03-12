import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { restoreString } from "./index2.ts";

Deno.test("shuffle string", () => {
  assertEquals("leetcode", restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
});
