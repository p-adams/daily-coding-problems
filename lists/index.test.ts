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
  const l1 = List(5);
  const l2 = List(10);
  assertEquals([], L.mergeLists(l1, l2));
});
