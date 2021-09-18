import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import {
  longestCommonPrefix,
  validParens,
  lengthOfLongestSubstring,
} from "./index.ts";

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
  assertEquals("aar", longestCommonPrefix(["aar", "aar", "aarm"]));
  assertEquals("fl", longestCommonPrefix(["flower", "flow", "flight"]));
  assertEquals("", longestCommonPrefix(["dog", "racecar", "car"]));
});

Deno.test("Length of longest substring without repeating characters", () => {
  assertEquals(3, lengthOfLongestSubstring("abcabcbb"));
  assertEquals(1, lengthOfLongestSubstring("bbbbb"));
  assertEquals(3, lengthOfLongestSubstring("pwwkew"));
  assertEquals(0, lengthOfLongestSubstring(""));
});
