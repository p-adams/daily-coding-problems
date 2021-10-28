import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as L from "./index.ts";

function List(size: number) {
  const list = new L.List();
  for (const item of [...Array(size).keys()]) {
    list.addItem(item);
  }
  return list;
}

Deno.test("add new list item", () => {
  const list = List(2);
  assertEquals(2, list.length());
});

Deno.test("determines if list has cycle", () => {
  const list = List(2);
  assertEquals(false, list.hasCycle());
});

Deno.test("merge two sorted lists", () => {
  const l1 = new L.List();
  l1.addItem(4);
  l1.addItem(2);
  l1.addItem(1);
  const n3 = new L.ListNode(4, null);
  const n2 = new L.ListNode(3, n3);
  const l2 = new L.ListNode(1, n2);
  const mergedList = l1.mergeLists(l2);
  assertEquals([1, 1, 2, 3, 4, 4], L.toArray(mergedList));
});

Deno.test("remove duplicates from sorted list iteratively", () => {
  const d = new L.ListNode(2, null);
  const c = new L.ListNode(2, d);
  const b = new L.ListNode(1, c);
  const head = new L.ListNode(1, b);
  assertEquals([1, 2], L.toArray(L.itrDeleteDuplicates(head)));
});

Deno.test("remove duplicates from sorted list recursively", () => {
  const d = new L.ListNode(2, null);
  const c = new L.ListNode(2, d);
  const b = new L.ListNode(1, c);
  const head = new L.ListNode(1, b);
  assertEquals([1, 2], L.toArray(L.recDeleteDuplicates(head)));
});
