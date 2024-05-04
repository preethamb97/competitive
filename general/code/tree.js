class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class traversal {
  constructor(root) {
    this.root = root;
  }
  
  bfstraverse() {
    const queue = [];
    const visited = [];
    queue.push(root);

    while(queue.length) {
      const queueElement = queue.shift();
      visited.push(queueElement.value);
      console.log("Traversed element : ", queueElement.value);
      if (queueElement.left) {
        queue.push(queueElement.left);
      }
      if (queueElement.right) {
        queue.push(queueElement.right);
      }
    }

    return visited;
  }

  dfsTraverse() {
    const stack = [];
    const visited = [];
    stack.push(root);

    while(stack.length) {

      // INORDER left, value, right
      // PREORDER value, left, right
      // POSTORDER left, right, value
      // THIS CURRENT IMPLEMENTATION IS PREORDER
      
      const stackElement = stack.pop();
      visited.push(stackElement.value);
      console.log("Traversed element : ", stackElement.value);
      if (stackElement.right) {
        stack.push(stackElement.right);
      }
      if (stackElement.left) {
        stack.push(stackElement.left);
      }
    }

    return visited;
  }
}



const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(root);

const traversar = new traversal(root);
console.log("**********BFS***************");
const bfsVisited = traversar.bfstraverse();
console.log("VISITED ELEMENTS : ", bfsVisited.join(" "));
console.log("**********DFS***************");
const dfsVisited = traversar.dfsTraverse();
console.log("VISITED ELEMENTS : ", dfsVisited.join(" "))
