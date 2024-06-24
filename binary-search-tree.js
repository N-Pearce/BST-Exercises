class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val)
    if (!this.root){
      this.root = newNode
      return this
    }

    let curNode = this.root
    while (true){
      if (val < curNode.val){
        if (!curNode.left){
          curNode.left = newNode
          return this
        }
        curNode = curNode.left
      }
      else {
        if (!curNode.right){
          curNode.right = newNode
          return this
        }
        curNode = curNode.right
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curNode = this.root) {
    if (!this.root){
      this.root = new Node(val)
      return this
    }
    if (val < curNode.val){
      if (!curNode.left){
        curNode.left = new Node(val)
        return this
      }
      this.insertRecursively(val, curNode.left)
    }
    if (val > curNode.val){
      if (!curNode.right){
        curNode.right = new Node(val)
        return this
      }
      this.insertRecursively(val, curNode.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curNode = this.root

    while (true){
      if (val === curNode.val){
        return curNode
      }
      else if (val < curNode.val){
        if (!curNode.left){
          return undefined
        }
        curNode = curNode.left
      }
      else {
        if (!curNode.right){
          return undefined
        }
        curNode = curNode.right
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curNode = this.root) {
    if (val === curNode.val){
      return curNode
    }
    else if (val < curNode.val){
      if (!curNode.left){
        return undefined
      }
      return this.findRecursively(val, curNode.left)
    }
    else {
      if (!curNode.right){
        return undefined
      }
      return this.findRecursively(val, curNode.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(arr=[], curNode=this.root) {
    arr.push(curNode.val)
    if (curNode.left) this.dfsPreOrder(arr, curNode.left)
    if (curNode.right) this.dfsPreOrder(arr, curNode.right)
    return arr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(arr=[], curNode = this.root) {
    if (curNode.left) this.dfsInOrder(arr, curNode.left)
    arr.push(curNode.val)
    if (curNode.right) this.dfsInOrder(arr, curNode.right)
    return arr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(arr=[], curNode=this.root) {
    if (curNode.left) this.dfsPostOrder(arr, curNode.left)
    if (curNode.right) this.dfsPostOrder(arr, curNode.right)
    arr.push(curNode.val)
    return arr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(arr=[], queue=[], curNode=this.root) {
    arr.push(curNode.val)
    queue.shift()
    if (curNode.left) queue.push(curNode.left)
    if (curNode.right) queue.push(curNode.right)
    if (queue[0]) this.bfs(arr, queue, queue[0])
    return arr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;