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

Deno.test("convert sorted array to binary search tree", () => {
  assertEquals(
    {
      val: 0,
      left: {
        val: -3,
        left: { val: -10, left: null, right: null },
        right: null,
      },
      right: { val: 9, left: { val: 5, left: null, right: null }, right: null },
    },
    JSON.parse(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9])))
  );
});
