export class TreeNode {
  public data: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
};

export class BinarySearchTree {
  public head: TreeNode | null; // similar to root

  constructor(head?: TreeNode) {
    this.head = head || null;
  }

  public insert(node: TreeNode | null = this.head, value: number): TreeNode {
    if (node === null) {
      const root = new TreeNode(value);
      return root;
    } else {
      if (value < node.data) {
        node.left = this.insert(node.left, value);
      } else {
        node.right = this.insert(node.right, value);
      }
      return node;
    }
  }

  public TraverseInorder(root: TreeNode | null = this.head): void {
    // let temp = root;
    if (root !== null) {
      this.TraverseInorder(root.left);
      console.log(root.data);
      this.TraverseInorder(root.right);
    }
  }

  public TraversePreorder(root: TreeNode | null = this.head): void {
    // let temp = root;
    if (root !== null) {
      console.log(root.data);
      this.TraverseInorder(root.left);
      this.TraverseInorder(root.right);
    }
  }

  public TraversePostorder(root: TreeNode | null = this.head): void {
    // let temp = root;
    if (root !== null) {
      this.TraverseInorder(root.left);
      this.TraverseInorder(root.right);
      console.log(root.data);
    }
  }

  /**
   * 
   * @param search input number to search in the tree
   * @param root tree root that we are searching on
   * if a node found with a given search query, we will return that TreeNode. else null
   */
  public SearchTree(root: TreeNode | null, search: number): TreeNode | null {

    if (!root) return null;
    if (root.data === search) {
      return root;
    } else if (search > root.data) {
      return this.SearchTree(root.right, search);
    } else {
      return this.SearchTree(root.left, search);
    }
  }

};
