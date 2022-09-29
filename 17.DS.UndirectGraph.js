class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList.val) this.adjacencyList[val] = [];
  }

  addEdge(vertix1, vertix2) {
    if (this.adjacencyList[vertix1] && this.adjacencyList[vertix2]) {
      this.adjacencyList[vertix1].push(vertix2);
      this.adjacencyList[vertix2].push(vertix1);
    }
  }

  removeEdge(vertix1, vertix2) {
    if (this.adjacencyList[vertix1] && this.adjacencyList[vertix2]) {
      this.adjacencyList[vertix1] = this.adjacencyList[vertix1].filter(
        (node) => node !== vertix2
      );
      this.adjacencyList[vertix2] = this.adjacencyList[vertix2].filter(
        (node) => node !== vertix1
      );
    }
  }

  removeVertex(vertix) {
    if (this.adjacencyList[vertix]) {
      this.adjacencyList[vertix].forEach((node) => {
        this.removeEdge(vertix, node);
      });
      delete this.adjacencyList[vertix];
    }
  }

  depthFirstRecursive(start) {
    let result = [],
      visited = {},
      adjacencyList = this.adjacencyList;

    (function dfs(vertix) {
      if (!vertix) return null;
      visited[vertix] = true;
      result.push(vertix);
      adjacencyList[vertix].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }



  depthFirstItrative(start){
    let result = [],stack = [start],visited = {},currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(
            neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        )
    }

    return result;
  }


  bearthFirstSearch(start){
    let result = [],queue = [start],visited = {},currentVertex;

    visited[start] = true;
    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(
            neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        )
    }
    return result;
  }

}

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstItrative("A"));
console.log(g.bearthFirstSearch("A"));


