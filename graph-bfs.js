const discovered = [];
const discoverOrder = [];

const edges = [
  ['14th&6th', '23rd&6th'],
  ['23rd&6th', '34th&6th'],
  ['34th&6th', '28th&Bwy'],
  ['28th&Bwy', '23rd&Bwy'],
  ['23rd&Bwy', '14th&Lex'],
  ['14th&Lex', '23rd&Lex']
]

const vertices = [
  { name: '34th&6th', distance: null, predecessor: null },
  { name: '23rd&6th', distance: null, predecessor: null },
  { name: '14th&6th', distance: null, predecessor: null },
  { name: '28th&Bwy', distance: null, predecessor: null },
  { name: '23rd&Bwy', distance: null, predecessor: null },
  { name: '14th&Lex', distance: null, predecessor: null },
  { name: '23rd&Lex', distance: null, predecessor: null },
];

const root = vertices[0];

function addToQueue(node) {
  discovered.push(node);
  while (discovered.length) {
    let newNode = arr.shift();
    findAdjacent(newNode);
    markDistanceAndPredecessor(newNode)
  }
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map((node) {
    node.distance = predecessor.distance +=1;
    
  })
}

function findAdjacent(nodeName) {
  const tempEdges = [];
  const curEdges = edges.filter((edge) => edge.includes(nodeName));
  curEdges.forEach((el) => tempEdges.push(el.filter((name) => name !== nodeName)[0]));
  return tempEdges;
}

function findNode(nodeName) {
  return vertices.find((node) => node.name === nodeName);
}

console.log(findAdjacent(vertices[0].name, edges));
