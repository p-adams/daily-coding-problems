import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import {
  hourglassSum,
  leftRotate,
  intersection,
  pairSum,
  countingValleys,
  jumpingOnClouds,
  containsDuplicates,
  containsDuplicates2,
  maxSubArray,
  maxConsecutiveOnes,
  singleNumber,
  plusOne,
  moveZeroes,
  rotateMatrix,
  validSudoku,
  countingGoodSubstrings,
  numUniqueEmails,
  __mergeSortedArrays,
  mergeSortedArrays,
  __maxProfit,
  maxProfit,
  matrixReshape,
  __matrixSearch,
  matrixSearch,
  findDuplicates,
  exists,
  removeElement,
} from "./index.ts";
Deno.test("hourglass sum", () => {
  const m = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];
  assertEquals(28, hourglassSum(m));
});

Deno.test("left rotate", () => {
  assertEquals([2, 3, 1], leftRotate([1, 2, 3], 1));
  assertEquals([3, 4, 5, 1, 2], leftRotate([1, 2, 3, 4, 5], 2));
  assertEquals([5, 1, 2, 3, 4], leftRotate([1, 2, 3, 4, 5], 4));
});

Deno.test("intersection of two arrays", () => {
  assertEquals([1, 1], intersection([1, 1], [1, 1]));
  assertEquals([2], intersection([1, 2, 3], [2, 2]));
  assertEquals([], intersection([1, 2, 3], [4, 5, 6]));
  assertEquals([5], intersection([1, 2, 3, 5, 5, 5], [5]));
});

Deno.test("how many pairs exist in array", () => {
  assertEquals(3, pairSum([10, 20, 20, 10, 10, 30, 50, 10, 20]));
  assertEquals(0, pairSum([]));
  assertEquals(2, pairSum([1, 2, 1, 2, 1, 3, 2]));
});

Deno.test("number of valleys traversed", () => {
  assertEquals(0, countingValleys([]));
  assertEquals(1, countingValleys(["U", "D", "D", "D", "U", "D", "U", "U"]));
  assertEquals(1, countingValleys(["D", "U"]));
  assertEquals(2, countingValleys(["D", "D", "U", "U", "D", "D", "U", "U"]));
  assertEquals(1, countingValleys(["D", "D", "U", "U"]));
});

Deno.test("minimum number of jumps required from start to finish", () => {
  assertEquals(0, jumpingOnClouds([]));
  assertEquals(4, jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
});

Deno.test("contains duplicates", () => {
  assertEquals(false, containsDuplicates([]));
  assertEquals(true, containsDuplicates([1, 2, 3, 1]));
  assertEquals(false, containsDuplicates([1, 2, 3, 4]));
  assertEquals(true, containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
});

Deno.test("maximum subarray", () => {
  assertEquals(0, maxSubArray([]));
  assertEquals(1, maxSubArray([1]));
  assertEquals(3, maxSubArray([0, 3]));
  assertEquals(23, maxSubArray([5, 4, -1, 7, 8]));
});

Deno.test("max consecutive ones ", () => {
  assertEquals(0, maxConsecutiveOnes([]));
  assertEquals(3, maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
});

Deno.test("single number in array of pairs ", () => {
  assertEquals(1, maxConsecutiveOnes([2, 1, 2]));
});

Deno.test("find single number in unsorted array of pairs", () => {
  assertEquals(1, singleNumber([2, 1, 2]));
  assertEquals(100, singleNumber([200, 300, 300, 200, 100, -4, -4]));
});

Deno.test("plus one", () => {
  assertEquals([1], plusOne([0]));
  assertEquals([2, 4], plusOne([2, 3]));
  assertEquals([1, 0, 0, 0], plusOne([9, 9, 9]));
});

Deno.test("contains duplicates", () => {
  assertEquals(false, containsDuplicates2([1, 2, 3, 4]));
  assertEquals(true, containsDuplicates2([1, 1]));
});

Deno.test("move zeroes to end of array in-place", () => {
  assertEquals([0], moveZeroes([0]));
  assertEquals([1, 2, 0, 0], moveZeroes([1, 0, 2, 0]));
  assertEquals(
    [1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0],
    moveZeroes([0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7])
  );
});

Deno.test("rotate matrix clockwise", () => {
  assertEquals([[]], rotateMatrix([[]]));
  assertEquals(
    [
      [3, 1],
      [4, 2],
    ],
    rotateMatrix([
      [1, 2],
      [3, 4],
    ])
  );
});

Deno.test("is valid sudoku board", () => {
  assertEquals(
    true,
    validSudoku([
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  );
});

Deno.test("substrings of size 3 with distinct characters", () => {
  assertEquals(0, countingGoodSubstrings(""));
  assertEquals(1, countingGoodSubstrings("xyzzaz"));
  assertEquals(4, countingGoodSubstrings("aababcabc"));
});

Deno.test("number of unique emails", () => {
  assertEquals(0, numUniqueEmails([]));
  assertEquals(
    3,
    numUniqueEmails([
      "footest@bar.com",
      "baz.qa.test+amr@acme.com",
      "foo.test@bar.com",
      "bar@bar.com",
      "bazqatest@acme.com",
    ])
  );
  assertEquals(1, numUniqueEmails(["foo.test@bar.com", "foo.test+y@bar.com"]));
  assertEquals(
    2,
    numUniqueEmails([
      "test.email+john@acme.com",
      "test.e.mail+john.mary@acme.com",
      "testemail+dan@ac.me.com",
    ])
  );

  assertEquals(
    2,
    numUniqueEmails([
      "fg.r.u.uzj+o.pw@kziczvh.com",
      "r.cyo.g+d.h+b.ja@tgsg.z.com",
      "fg.r.u.uzj+o.f.d@kziczvh.com",
      "r.cyo.g+ng.r.iq@tgsg.z.com",
      "fg.r.u.uzj+lp.k@kziczvh.com",
      "r.cyo.g+n.h.e+n.g@tgsg.z.com",
      "fg.r.u.uzj+k+p.j@kziczvh.com",
      "fg.r.u.uzj+w.y+b@kziczvh.com",
      "r.cyo.g+x+d.c+f.t@tgsg.z.com",
      "r.cyo.g+x+t.y.l.i@tgsg.z.com",
      "r.cyo.g+brxxi@tgsg.z.com",
      "r.cyo.g+z+dr.k.u@tgsg.z.com",
      "r.cyo.g+d+l.c.n+g@tgsg.z.com",
      "fg.r.u.uzj+vq.o@kziczvh.com",
      "fg.r.u.uzj+uzq@kziczvh.com",
      "fg.r.u.uzj+mvz@kziczvh.com",
      "fg.r.u.uzj+taj@kziczvh.com",
      "fg.r.u.uzj+fek@kziczvh.com",
    ])
  );
});
Deno.test("merge two sorted arrays", () => {
  assertEquals([], mergeSortedArrays([], 0, [], 0));
  assertEquals([1], mergeSortedArrays([0], 0, [1], 1));
  assertEquals([1, 2], mergeSortedArrays([1], 1, [2], 1));
  assertEquals(
    [-10, 2, 30, 40, 50, 60],
    mergeSortedArrays([-10, 2], 2, [30, 40, 50, 60], 4)
  );
  assertEquals(
    [1, 2, 2, 3, 5, 6],
    mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
  );
});

Deno.test("merge two sorted arrays (brute force)", () => {
  assertEquals([], __mergeSortedArrays([], 0, [], 0));
  assertEquals([1], __mergeSortedArrays([0], 0, [1], 1));
  assertEquals([1, 2], __mergeSortedArrays([1], 1, [2], 1));
  assertEquals(
    [-10, 2, 30, 40, 50, 60],
    __mergeSortedArrays([-10, 2], 2, [30, 40, 50, 60], 4)
  );
  assertEquals(
    [1, 2, 2, 3, 5, 6],
    __mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
  );
});

Deno.test("max profit (brute force)", () => {
  assertEquals(0, __maxProfit([]));
  assertEquals(5, __maxProfit([7, 1, 5, 3, 6, 4]));
  assertEquals(0, __maxProfit([7, 6, 4, 3, 1]));
});

Deno.test("max profit (optimized)", () => {
  assertEquals(0, maxProfit([]));
  assertEquals(5, maxProfit([7, 1, 5, 3, 6, 4]));
  assertEquals(0, maxProfit([7, 6, 4, 3, 1]));
});

Deno.test("matrix reshape", () => {
  assertEquals(
    [[1, 2, 3, 4]],
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      4
    )
  );
});

Deno.test("brute force matrix search", () => {
  assertEquals(false, __matrixSearch([[]], 10));
  assertEquals(
    true,
    __matrixSearch(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3
    )
  );
  assertEquals(
    false,
    __matrixSearch(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      17
    )
  );
});

Deno.test("efficient matrix search", () => {
  assertEquals(
    true,
    matrixSearch(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3
    )
  );
});

Deno.test("find duplicates", () => {
  assertEquals([1], findDuplicates([1, 1, 2]));
  assertEquals([2, 3], findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
});

Deno.test("word search", () => {
  assertEquals(false, exists([], ""));
  assertEquals(
    true,
    exists(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "SEE"
    )
  );
  assertEquals(
    true,
    exists(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED"
    )
  );
  assertEquals(
    false,
    exists(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCB"
    )
  );
});

Deno.test("remove all occurrences of x", () => {
  assertEquals(-1, removeElement([], 1));
});
