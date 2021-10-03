import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as L from "./index.ts";

Deno.test("add new list item", () => {
  assertEquals(2, L.addItem(2));
});
