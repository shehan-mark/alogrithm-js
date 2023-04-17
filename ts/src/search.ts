import { Queue } from './queue';
import { BinarySearchTree, TreeNode } from './tree';

export const BFS = (Tree: BinarySearchTree) => {
  // Breadth first search
  const result = [];
  const queue = new Queue();
  // starting off by adding the first/ root node to the queue
  queue.enqueue(Tree.head);

  console.log(queue);

  while (!queue.isEmpty()) {
    const queueSize = queue.size();
    const level = [];
    for (let i = 0; i < queueSize; i++) {
      const node: TreeNode = queue.dequeue();
      if (node) {
        level.push(node.data);
        queue.enqueue(node.left);
        queue.enqueue(node.right);
      }
    }
    console.log('state of the queue', queue);
    if (level.length !== 0)
      result.push(level);
  }

  return result;
}