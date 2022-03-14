import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import * as string from "./index2.ts";
Deno.test("truncate sentence", () => {
  assertEquals(
    "Hello how are you",
    string.truncateSentence("Hello how are you Contestant", 4)
  );
});
