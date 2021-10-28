export class ListNode {
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
    let p1 = node;
    let p2 = node;
    while (p2) {
      p1 = p1!.next;
      if (!p2.next) {
        return false;
      }
      p2 = p2.next.next;
      if (p2 === p1) return true;
    }
    return false;
  }
  mergeLists(l2: ListNode | null): ListNode | null {
    if (!l2) return this;
    if (this.val > l2!.val) return l2!.mergeLists(this);
    this.next = l2!.mergeLists(this.next);
    return this;
  }
  print() {
    console.log(this.val);
    if (!this.next) {
      return;
    }
    this.next.print();
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
  mergeLists(l2: ListNode | null): ListNode | null {
    return this.head!.mergeLists(l2);
  }
}
export function toArray(list: ListNode | null) {
  const result = [];
  let curr = list;
  let i = 0;
  while (curr !== null) {
    result[i++] = curr?.val;
    curr = curr?.next;
  }
  return result;
}
export function mergeTwoLists2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l2) return l1;
  if (!l1) return l2;
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists2(l1, l2.next);
    return l2;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  return null;
}
