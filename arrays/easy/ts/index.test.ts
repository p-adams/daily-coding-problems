import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as array from "./index.ts";
Deno.test("hourglass sum", () => {
  const m = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];
  assertEquals(28, array.hourglassSum(m));
});

Deno.test("left rotate", () => {
  assertEquals([2, 3, 1], array.leftRotate([1, 2, 3], 1));
  assertEquals([3, 4, 5, 1, 2], array.leftRotate([1, 2, 3, 4, 5], 2));
  assertEquals([5, 1, 2, 3, 4], array.leftRotate([1, 2, 3, 4, 5], 4));
});

Deno.test("intersection of two arrays", () => {
  assertEquals([1, 1], array.intersection([1, 1], [1, 1]));
  assertEquals([2], array.intersection([1, 2, 3], [2, 2]));
  assertEquals([], array.intersection([1, 2, 3], [4, 5, 6]));
  assertEquals([5], array.intersection([1, 2, 3, 5, 5, 5], [5]));
});

Deno.test("how many pairs exist in array", () => {
  assertEquals(3, array.pairSum([10, 20, 20, 10, 10, 30, 50, 10, 20]));
  assertEquals(0, array.pairSum([]));
  assertEquals(2, array.pairSum([1, 2, 1, 2, 1, 3, 2]));
});

Deno.test("number of valleys traversed", () => {
  assertEquals(0, array.countingValleys([]));
  assertEquals(
    1,
    array.countingValleys(["U", "D", "D", "D", "U", "D", "U", "U"])
  );
  assertEquals(1, array.countingValleys(["D", "U"]));
  assertEquals(
    2,
    array.countingValleys(["D", "D", "U", "U", "D", "D", "U", "U"])
  );
  assertEquals(1, array.countingValleys(["D", "D", "U", "U"]));
});

Deno.test("minimum number of jumps required from start to finish", () => {
  assertEquals(0, array.jumpingOnClouds([]));
  assertEquals(4, array.jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
});

Deno.test("contains duplicates", () => {
  assertEquals(false, array.containsDuplicates([]));
  assertEquals(true, array.containsDuplicates([1, 2, 3, 1]));
  assertEquals(false, array.containsDuplicates([1, 2, 3, 4]));
  assertEquals(true, array.containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
});

Deno.test("maximum subarray", () => {
  assertEquals(0, array.maxSubArray([]));
  assertEquals(1, array.maxSubArray([1]));
  assertEquals(3, array.maxSubArray([0, 3]));
  assertEquals(23, array.maxSubArray([5, 4, -1, 7, 8]));
});

Deno.test("max consecutive ones ", () => {
  assertEquals(0, array.maxConsecutiveOnes([]));
  assertEquals(3, array.maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
});

Deno.test("single number in array of pairs ", () => {
  assertEquals(1, array.maxConsecutiveOnes([2, 1, 2]));
});

Deno.test("find single number in unsorted array of pairs", () => {
  assertEquals(1, array.singleNumber([2, 1, 2]));
  assertEquals(100, array.singleNumber([200, 300, 300, 200, 100, -4, -4]));
});

Deno.test("plus one", () => {
  assertEquals([1], array.plusOne([0]));
  assertEquals([2, 4], array.plusOne([2, 3]));
  assertEquals([1, 0, 0, 0], array.plusOne([9, 9, 9]));
});

Deno.test("contains duplicates", () => {
  assertEquals(false, array.containsDuplicates2([1, 2, 3, 4]));
  assertEquals(true, array.containsDuplicates2([1, 1]));
});

Deno.test("move zeroes to end of array in-place", () => {
  assertEquals([0], array.moveZeroes([0]));
  assertEquals([1, 2, 0, 0], array.moveZeroes([1, 0, 2, 0]));
  assertEquals(
    [1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0],
    array.moveZeroes([0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7])
  );
});

Deno.test("rotate matrix clockwise", () => {
  assertEquals([[]], array.rotateMatrix([[]]));
  assertEquals(
    [
      [3, 1],
      [4, 2],
    ],
    array.rotateMatrix([
      [1, 2],
      [3, 4],
    ])
  );
});

Deno.test("is valid sudoku board", () => {
  assertEquals(
    true,
    array.validSudoku([
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
  assertEquals(0, array.countingGoodSubstrings(""));
  assertEquals(1, array.countingGoodSubstrings("xyzzaz"));
  assertEquals(4, array.countingGoodSubstrings("aababcabc"));
});

Deno.test("number of unique emails", () => {
  assertEquals(0, array.numUniqueEmails([]));
  assertEquals(
    3,
    array.numUniqueEmails([
      "footest@bar.com",
      "baz.qa.test+amr@acme.com",
      "foo.test@bar.com",
      "bar@bar.com",
      "bazqatest@acme.com",
    ])
  );
  assertEquals(
    1,
    array.numUniqueEmails(["foo.test@bar.com", "foo.test+y@bar.com"])
  );
  assertEquals(
    2,
    array.numUniqueEmails([
      "test.email+john@acme.com",
      "test.e.mail+john.mary@acme.com",
      "testemail+dan@ac.me.com",
    ])
  );

  assertEquals(
    2,
    array.numUniqueEmails([
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
  assertEquals([], array.mergeSortedArrays([], 0, [], 0));
  assertEquals([1], array.mergeSortedArrays([0], 0, [1], 1));
  assertEquals([1, 2], array.mergeSortedArrays([1], 1, [2], 1));
  assertEquals(
    [-10, 2, 30, 40, 50, 60],
    array.mergeSortedArrays([-10, 2], 2, [30, 40, 50, 60], 4)
  );
  assertEquals(
    [1, 2, 2, 3, 5, 6],
    array.mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
  );
});

Deno.test("merge two sorted arrays (brute force)", () => {
  assertEquals([], array.__mergeSortedArrays([], 0, [], 0));
  assertEquals([1], array.__mergeSortedArrays([0], 0, [1], 1));
  assertEquals([1, 2], array.__mergeSortedArrays([1], 1, [2], 1));
  assertEquals(
    [-10, 2, 30, 40, 50, 60],
    array.__mergeSortedArrays([-10, 2], 2, [30, 40, 50, 60], 4)
  );
  assertEquals(
    [1, 2, 2, 3, 5, 6],
    array.__mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
  );
});

Deno.test("max profit (brute force)", () => {
  assertEquals(0, array.__maxProfit([]));
  assertEquals(5, array.__maxProfit([7, 1, 5, 3, 6, 4]));
  assertEquals(0, array.__maxProfit([7, 6, 4, 3, 1]));
});

Deno.test("max profit (optimized)", () => {
  assertEquals(0, array.maxProfit([]));
  assertEquals(5, array.maxProfit([7, 1, 5, 3, 6, 4]));
  assertEquals(0, array.maxProfit([7, 6, 4, 3, 1]));
});

Deno.test("matrix reshape", () => {
  assertEquals(
    [[1, 2, 3, 4]],
    array.matrixReshape(
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
  assertEquals(false, array.__matrixSearch([[]], 10));
  assertEquals(
    true,
    array.__matrixSearch(
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
    array.__matrixSearch(
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
    array.matrixSearch(
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
  assertEquals([1], array.findDuplicates([1, 1, 2]));
  assertEquals([2, 3], array.findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
});

Deno.test("word search", () => {
  assertEquals(false, array.exists([], ""));
  assertEquals(
    true,
    array.exists(
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
    array.exists(
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
    array.exists(
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
  assertEquals(2, array.removeElement([3, 2, 2, 3], 3));
  assertEquals(5, array.removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
});

Deno.test("search insert", () => {
  assertEquals(1, array.searchInsert([0, 1, 2, 3, 4, 5, 6], 1));
  assertEquals(1, array.searchInsert([1, 3, 5, 6], 2));
  assertEquals(2, array.searchInsert([1, 3, 5, 6], 4));
  assertEquals(4, array.searchInsert([1, 3, 5, 6], 7));
  assertEquals(0, array.searchInsert([1, 3, 5, 6], 0));
  assertEquals(0, array.searchInsert([1], 0));
});

Deno.test("keyboard row", () => {
  assertEquals(
    ["Alaska", "Dad"],
    array.findWords(["Hello", "Alaska", "Dad", "Peace"])
  );
  assertEquals(["Alaska", "Dad"], array.findWords(["Alaska", "Dad"]));
  assertEquals([], array.findWords(["omk"]));
  assertEquals(["adsdf", "sfd"], array.findWords(["adsdf", "sfd"]));
});

Deno.test("find pivot index", () => {
  assertEquals(-1, array.pivotIndex([]));
  assertEquals(3, array.pivotIndex([1, 7, 3, 6, 5, 6]));
  assertEquals(-1, array.pivotIndex([1, 2, 3]));
  assertEquals(0, array.pivotIndex([2, 1, -1]));
});

Deno.test("next greater element I", () => {
  assertEquals([-1, 3, -1], array.nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
  assertEquals([3, -1], array.nextGreaterElement([2, 4], [1, 2, 3, 4]));
});

Deno.test("richest customer wealth", () => {
  assertEquals(
    6,
    array.maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
    ])
  );
  assertEquals(
    10,
    array.maximumWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ])
  );
  assertEquals(
    17,
    array.maximumWealth([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ])
  );
});

Deno.test(
  "majority element (element that appears more than [n/2] times)",
  () => {
    assertEquals(3, array.majorityElement([3, 2, 3]));
    assertEquals(2, array.majorityElement([2, 2]));
  }
);

Deno.test("find all numbers disappeared in an array", () => {
  assertEquals([5, 6], array.findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
  assertEquals([2], array.findDisappearedNumbers([1, 1]));
});

Deno.test("can place flowers", () => {
  assertEquals(true, array.canPlaceFlowers([1, 0, 0, 0, 1], 1));
  assertEquals(true, array.canPlaceFlowers([0, 0, 1, 0, 1, 0, 0], 2));
  assertEquals(false, array.canPlaceFlowers([1, 0, 0, 0, 1], 2));
});

Deno.test("gas station", () => {
  assertEquals(-1, array.canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
});

Deno.test("create array ans of length 2n", () => {
  assertEquals([1, 1], array.getConcatenation([1]));
  assertEquals([1, 3, 2, 1, 1, 3, 2, 1], array.getConcatenation([1, 3, 2, 1]));
  assertEquals([3, 3, 3, 3, 3, 3], array.getConcatenation([3, 3, 3]));
});

Deno.test("running sum of 1d array", () => {
  assertEquals([1, 3, 6, 10], array.runningSum([1, 2, 3, 4]));
  assertEquals([1, 2, 3, 4, 5], array.runningSum([1, 1, 1, 1, 1]));
  assertEquals([3, 4, 6, 16, 17], array.runningSum([3, 1, 2, 10, 1]));
});

Deno.test(
  "get final value after n number of increment and decrement operations",
  () => {
    assertEquals(1, array.finalValueAfterOperations(["--X", "X++", "X++"]));
    assertEquals(3, array.finalValueAfterOperations(["++X", "++X", "X++"]));
    assertEquals(
      0,
      array.finalValueAfterOperations(["X++", "++X", "--X", "X--"])
    );
  }
);

Deno.test("longest sentence in list of sentences", () => {
  assertEquals(
    3,
    array.mostWordsFound(["asdf asdf asdf", "asdf", "qwerty qwerty"])
  );
});

Deno.test("shuffle array", () => {
  assertEquals([1, 2, 1, 2], array.shuffle([1, 1, 2, 2], 2));
  assertEquals([2, 3, 5, 4, 1, 7], array.shuffle([2, 5, 1, 3, 4, 7], 3));
});

Deno.test("number of good pairs", () => {
  assertEquals(4, array.numIdenticalPairs([1, 2, 3, 1, 1, 3]));
});

Deno.test("number of good pairs", () => {
  assertEquals(4, array.numIdenticalPairs([1, 2, 3, 1, 1, 3]));
});

Deno.test("kids with greatest number of candies", () => {
  assertEquals([true, false, true], array.kidsWithCandies([12, 1, 12], 10));
  assertEquals(
    [true, true, true, false, true],
    array.kidsWithCandies([2, 3, 5, 1, 3], 3)
  );
  assertEquals([false, true, true], array.kidsWithCandies([2, 8, 7], 1));
});

Deno.test("count of numbers smaller than current number", () => {
  assertEquals(
    [4, 0, 1, 1, 3],
    array.smallerNumbersThanCurrent([8, 1, 2, 2, 3])
  );
});

Deno.test("decode XORed array", () => {
  assertEquals([1, 0, 2, 1], array.decode([1, 2, 3], 1));
});

Deno.test("decompress run-length encoded list", () => {
  assertEquals([], array.decompressRLElist([]));
  assertEquals([2, 4, 4, 4], array.decompressRLElist([1, 2, 3, 4]));
  assertEquals([1, 3, 3], array.decompressRLElist([1, 1, 2, 3]));
});
