//Priority Queue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MinPriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// WeightedGraph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList.val) this.adjacencyList[val] = [];
  }

  addEdge(vertix1, vertix2, weight) {
    if (this.adjacencyList[vertix1] && this.adjacencyList[vertix2]) {
      this.adjacencyList[vertix1].push({ node: vertix2, weight });
      this.adjacencyList[vertix2].push({ node: vertix1, weight });
    }
  }

  shortestPathDijkstraAlgotrithm(start,end){
    // declaration.
    let distances = {},nodes = new MinPriorityQueue(),previous = {},smollestWeight,result = {};

    // build up initial state.
    for (const vertex in this.adjacencyList) {
        if (Object.hasOwnProperty.call(this.adjacencyList, vertex)) {
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex] = null;
        }
    }
    
    // while PQ:nodes has values. 
    while(nodes.values.length){
        //get smollest weight
        smollestWeight = nodes.dequeue().val;

        if(smollestWeight === end){
            //we finish our task.
            result.weight = distances[end];
            result.path = [];
            //build up path
            while(previous[smollestWeight]){
                result.path.push(smollestWeight);
                smollestWeight = previous[smollestWeight];
            }
            result.path.push(start);
            result.path.reverse();
            //finish loop
            return result;
        }

        if(smollestWeight || distances[smollestWeight] !== Infinity){
            //loop on neighbors
            for (const neighbor in this.adjacencyList[smollestWeight]) {
                if (Object.hasOwnProperty.call(this.adjacencyList[smollestWeight], neighbor)) {
                    //next neighbor node
                    const nextNode = this.adjacencyList[smollestWeight][neighbor];
                    //calculate new distance
                    let candidate = distances[smollestWeight] + nextNode.weight;
                    //get next neighbor node 
                    let nextNeighbor = nextNode.node;

                    if(candidate < distances[nextNeighbor]){
                        //update smollest weight
                        distances[nextNeighbor] = candidate;
                        //update previous
                        previous[nextNeighbor] = smollestWeight;
                        //enqueue in priority queue
                        nodes.enqueue(nextNeighbor,candidate);
                    }
                }
            }
        }
    }

  }
}

// Test.
var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
console.log(graph.shortestPathDijkstraAlgotrithm("A","E")
);
