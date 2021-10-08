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
