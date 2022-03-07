import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import {
  Trie,
  sortedArrayToBST,
  pathSum,
  TreeNode,
  isSymmetric,
} from "./index.ts";

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

Deno.test("values in root - leaf path of tree add up to 22", () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(11);
  root.left.left.left = new TreeNode(7);
  root.left.left.right = new TreeNode(2);
  root.right.right = new TreeNode(4);
  root.right.left = new TreeNode(13);
  root.right.right.right = new TreeNode(1);
  assertEquals(true, pathSum(root, 22));
});

Deno.test("symmetric tree", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right = new TreeNode(2);
  root.right.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  assertEquals(true, isSymmetric(root));
});
