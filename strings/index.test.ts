import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { validParens } from "./index.ts";

Deno.test("valid parentheses", () => {
  assertEquals(true, validParens(""));
  assertEquals(true, validParens("()"));
  assertEquals(false, validParens("("));
  assertEquals(false, validParens(")"));
  assertEquals(true, validParens("(())"));
});
