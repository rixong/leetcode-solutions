/*eslint no-param-reassign: ["error", { "props": false }]*/

// const myNode = {
//   data: 5,
//   left: {
//     data: 3,
//     left: null,
//     right: null,
//   },
//   right: {
//     data: 7,
//     left: null,
//     right: null,
//   },
// };


const myNode = {
  data: 5,
  left:
  {
    data: 3,
    left: {
      data: 1, left: null, right: null,
    },
    right: null,
  },
  right: {
    data: 7,
    left: {
      data: 6,
      left: null,
      right: null,
    },
    right: {
      data: 9,
      left: null,
      right: null,
    },
  },
};

const aNode = {
  data: 9,
  left: null,
  right: null,
};

function inOrder(currentNode) {
  console.log(currentNode.data);
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
}

// inOrder(myNode);

function findOrAdd(currentNode, newNode) {
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode);
    }
    currentNode.left = newNode;
    return newNode;
  }
  if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode);
    }
    currentNode.right = newNode;
    return newNode;
  }
  return true;
}

function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right);
  }
  return currentNode;
}

function min(currentNode) {
  if (currentNode.left) {
    return min(currentNode.left);
  }
  return currentNode;
}

function breadthSearch(currentNode) {
}

// console.log(findOrAdd(myNode, aNode));
// inOrder(myNode);
// console.log(max(myNode));
// console.log(min(myNode));
console.log(breadthSearch(myNode));



/*
          5
        /   \
      3       7
    /       /   \
   1       6     9
*/