import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import {
  longestCommonPrefix,
  validParens,
  lengthOfLongestSubstring,
  repeatedString,
  isUnique,
  firstUniqChar,
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

Deno.test("count of a's in repeated string", () => {
  assertEquals(0, repeatedString("", 0));
  assertEquals(7, repeatedString("aba", 10));
  assertEquals(1000000000000, repeatedString("a", 1000000000000));
});

Deno.test("string has all unique characters", () => {
  assertEquals(true, isUnique(""));
  assertEquals(true, isUnique("meow"));
  assertEquals(false, isUnique("abcdefgg"));
});

Deno.test("first unique character in a string", () => {
  assertEquals(-1, firstUniqChar(""));
  // assertEquals(0, firstUniqChar("asdf"));
  assertEquals(-1, firstUniqChar("bazbaz"));
});
