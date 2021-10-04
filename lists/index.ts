class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  length(): number {
    if (!this.next) {
      return 1;
    }
    return this.next.length() + 1;
  }
  hasCycle(node: ListNode | null): boolean {
    if (!node?.next) {
      return false;
    }
    return this.hasCycle(node.next);
  }
}

export class List {
  head?: ListNode;

  addItem(item: number) {
    const prevHead: ListNode | undefined = this.head;
    this.head = new ListNode(item, prevHead);
  }
  length() {
    return this.head?.length();
  }
  hasCycle(): boolean {
    if (!this.head) return false;
    return this.head.hasCycle(this.head);
  }
}
