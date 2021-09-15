import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { validParens } from "./index.ts";

Deno.test("valid parentheses", () => {
  assertEquals(false, validParens("("));
});
