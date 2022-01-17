import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import {
  longestCommonPrefix,
  validParens,
  lengthOfLongestSubstring,
  repeatedString,
  isUnique,
  firstUniqChar,
  canConstruct,
  __isAnagram,
  isAnagram,
  numJewelsInStones,
  defangIPaddr,
  convertToTitle,
  longestPalindrome,
  wordPattern,
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
  assertEquals(0, firstUniqChar("asdf"));
  assertEquals(-1, firstUniqChar("bazbaz"));
  assertEquals(0, firstUniqChar("leetcode"));
});

Deno.test("can construct string A from string B", () => {
  assertEquals(true, canConstruct("aa", "aab"));
  assertEquals(false, canConstruct("a", "b"));
  assertEquals(false, canConstruct("aa", "ab"));
  assertEquals(true, canConstruct("me", "meow"));
  assertEquals(false, canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
});

Deno.test("is valid anagram (brute force)", () => {
  assertEquals(true, __isAnagram("meow", "wmoe"));
  assertEquals(true, __isAnagram("anagram", "nagaram"));
  assertEquals(false, __isAnagram("rat", "cat"));
});

Deno.test("is valid anagram (efficient)", () => {
  assertEquals(true, isAnagram("meow", "wmoe"));
  assertEquals(true, isAnagram("anagram", "nagaram"));
  assertEquals(false, isAnagram("rat", "cat"));
  assertEquals(false, isAnagram("ab", "a"));
  assertEquals(false, isAnagram("a", "ab"));
});

Deno.test("jewels and stones", () => {
  assertEquals(3, numJewelsInStones("aA", "aAAbbbb"));
});

Deno.test("defanging an IP address", () => {
  assertEquals("1[.]1[.]1[.]1", defangIPaddr("1.1.1.1"));
  assertEquals("255[.]100[.]50[.]0", defangIPaddr("255.100.50.0"));
});

Deno.test("Excel Sheet Column Title", () => {
  assertEquals("A", convertToTitle(1));
  assertEquals("AB", convertToTitle(28));
  assertEquals("ZY", convertToTitle(701));
});

Deno.test("Longest Palindromic Substring", () => {
  assertEquals("bab", longestPalindrome("babad"));
  assertEquals("bb", longestPalindrome("cbbd"));
  assertEquals(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    longestPalindrome(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    )
  );
});

Deno.test("Word Pattern", () => {
  assertEquals(true, wordPattern("abba", "apple pear pear apple"));
  assertEquals(true, wordPattern("abab", "apple pear apple pear"));
  assertEquals(false, wordPattern("abba", "apple pear pear banana"));
  assertEquals(false, wordPattern("aaaa", "apple kiwi kiwi apple"));
});
