class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
  constructor() {
    this.isEnd = false;
    this.children = new Map();
  }
}

export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  insert(word: string): void {
    this.insertIntoTrie(word, 0, this.root);
  }
  insertIntoTrie(word: string, index: number, node: TrieNode | undefined) {
    const ch = word.charAt(index);
    const children = node!.children;
    if (!children.has(ch)) {
      children.set(ch, new TrieNode());
    }
    if (index === word.length - 1) {
      children.get(ch)!.isEnd = true;
    } else {
      this.insertIntoTrie(word, index + 1, node!.children.get(ch));
    }
  }
  // checks if 'word' is in trie
  search(word: string): boolean {
    return this.wordSearch(word, 0, this.root);
  }
  wordSearch(word: string, index: number, node: TrieNode | undefined): boolean {
    const ch = word.charAt(index);
    const children = node!.children;
    if (!children.has(ch)) {
      return false;
    }
    if (index === word.length - 1) {
      return children.get(ch)!.isEnd;
    }
    return this.wordSearch(word, index + 1, children.get(ch));
  }
  // checks if word in tree has given prefix
  startsWith(prefix: string): boolean {
    return this.wordStartsWith(prefix, 0, this.root);
  }
  wordStartsWith(
    prefix: string,
    index: number,
    node: TrieNode | undefined
  ): boolean {
    const ch = prefix.charAt(index);
    const children = node!.children;
    if (!children.has(ch)) {
      return false;
    }
    if (index === prefix.length - 1) {
      return true;
    }
    return this.wordStartsWith(prefix, index + 1, children.get(ch));
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function arrToBST(nums: number[], start: number, end: number): TreeNode | null {
  if (end < start) {
    return null;
  }
  if (end === start) {
    return new TreeNode(nums[end]);
  }
  const mid = Math.ceil((start + end) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = arrToBST(nums, start, mid - 1);
  root.right = arrToBST(nums, mid + 1, end);
  return root;
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  return arrToBST(nums, 0, nums.length - 1);
}

export function pathSum(root: TreeNode, targetSum: number): boolean {
  return pathSumHelper(root, 0, targetSum);
}

export function pathSumHelper(
  node: TreeNode | null,
  sum: number,
  targetSum: number
): boolean {
  if (node === null) {
    return false;
  }

  if (node.left === null && node.right === null) {
    return sum + node.val === targetSum;
  }

  return (
    pathSumHelper(node.left, sum + node.val, targetSum) ||
    pathSumHelper(node.right, sum + node.val, targetSum)
  );
}

function isMirror(
  root1: TreeNode | null | undefined,
  root2: TreeNode | null | undefined
): boolean {
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1?.val === root2?.val) {
    return (
      isMirror(root1?.left, root2?.right) && isMirror(root1?.right, root2?.left)
    );
  }
  return false;
}

export function isSymmetric(node: TreeNode | null) {
  return isMirror(node, node);
}
