import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import * as string from "./index2.ts";
Deno.test("truncate sentence", () => {
  assertEquals(
    "The quick brown fox",
    string.truncateSentence("The quick brown fox jumps over the lazy dog", 4)
  );
});
