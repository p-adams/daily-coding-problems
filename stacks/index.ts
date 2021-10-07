export class MinStack {
  private _stack: number[];
  constructor() {
    this._stack = [];
  }
  push(val: number): void {
    this._stack.push(val);
  }
  pop(): void {
    this._stack.pop();
  }
  top(): number {
    const last = this._stack[this._stack.length - 1];
    return last;
  }
  getMin(): number {
    let min = this._stack[0];
    for (let i = 1; i < this._stack.length; i++) {
      min = Math.min(min, this._stack[i]);
    }
    return min;
  }
}
