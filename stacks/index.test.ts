import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { MinStack } from "./index.ts";
Deno.test("MinStack class operations", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  assertEquals(-3, minStack.getMin());
  minStack.pop();
  assertEquals(0, minStack.top());
  assertEquals(-2, minStack.getMin());
});
