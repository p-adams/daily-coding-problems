import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { Trie, sortedArrayToBST } from "./index.ts";

Deno.test("prefix tree", () => {
  const trie = new Trie();
  trie.insert("apple");
  assertEquals(true, trie.search("apple"));
  assertEquals(false, trie.search("app"));
  assertEquals(true, trie.startsWith("app"));
  trie.insert("app");
  assertEquals(true, trie.search("app"));
});

Deno.test("convert sorted array to binary search tree", () => {});
