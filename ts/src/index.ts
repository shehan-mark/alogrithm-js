import { TreeNode, BinarySearchTree } from './tree';
import { BFS } from './search';
// How to do BFS, DFS
// Balance binary tree

(() => {
  console.log('program started...');

  // tree creation
  const TreeRoot = new TreeNode(3);
  TreeRoot.left = new TreeNode(9);
  TreeRoot.right = new TreeNode(20);
  const Tree = new BinarySearchTree(TreeRoot);
  Tree.insert(Tree.head, 15);
  Tree.insert(Tree.head, 7);

  console.log('-------------------');
  console.log(Tree);
  // Tree.TraverseInorder();
  console.log('-------------------');

  const result = BFS(Tree);

  console.log('final result of BFS', result);
})();