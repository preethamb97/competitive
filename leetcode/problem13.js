// https://leetcode.com/problems/min-stack/?envType=study-plan-v2&envId=top-interview-150 min-stack

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length) {
            if (val <= this.minStack[this.minStack.length - 1]) {
                this.minStack.push(val);
            }
        } else {
            this.minStack.push(val);
        }
    }
    pop() {
        if (this.stack.length) {
            const popped = this.stack.pop();
            if (
                this.minStack.length &&
                this.minStack[this.minStack.length - 1] == popped
            ) {
                this.minStack.pop();
            }
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1] || 0;
    }
}
