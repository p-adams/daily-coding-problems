import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { longestCommonPrefix, validParens } from "./index.ts";

Deno.test("valid parentheses", () => {
  assertEquals(true, validParens(""));
  assertEquals(true, validParens("()"));
  assertEquals(false, validParens("("));
  assertEquals(false, validParens(")"));
  assertEquals(true, validParens("(())"));
  assertEquals(true, validParens("[()]"));
  assertEquals(false, validParens("(}"));
  assertEquals(false, validParens(")("));
  assertEquals(false, validParens("{{{"));
});

Deno.test("Longest common prefix", () => {
  assertEquals("fl", longestCommonPrefix(["flower", "flow", "flight"]));
  assertEquals("", longestCommonPrefix(["dog", "racecar", "car"]));
});
