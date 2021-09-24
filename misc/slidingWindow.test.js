import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as sw from "./slidingWindow.js";

Deno.test("longest substring containing k distinct elements", () => {
  assertEquals(4, sw.distinctElements("foobar", 2));
});
