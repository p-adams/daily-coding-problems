import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as L from "./index.ts";

function populateList(size: number) {
  const list = new L.List();
  for (const item of [...Array(size).keys()]) {
    list.addItem(item);
  }
  return list;
}

Deno.test("add new list item", () => {
  const list = populateList(2);
  assertEquals(2, list.length());
});

Deno.test("determines if list has cycle", () => {
  const list = populateList(2);
  assertEquals(true, list.hasCycle());
});
