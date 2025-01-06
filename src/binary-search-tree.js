const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.tree) {
      this.tree = newNode;
      return this;
    }

    let current = this.tree;

    while (current) {
      if (newNode.data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    if (!this.tree) return false;

    let current = this.tree;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return null;
    return found;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.tree) {
      return null;
    }

    let current = this.tree;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this.tree) {
      return null;
    }

    let current = this.tree;
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
