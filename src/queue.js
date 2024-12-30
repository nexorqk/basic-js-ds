const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return {
      value: this.queue.value,
      next: this.queue.next,
    };
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.size === 0) {
      this.queue = node;
    } else {
      let current = this.queue;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  dequeue() {
    const topEl = this.queue.value;

    const next = this.queue.next;

    this.queue.value = next.value;
    this.queue.next = next.next;

    this.size--;
    return topEl;
  }
}

module.exports = {
  Queue,
};
