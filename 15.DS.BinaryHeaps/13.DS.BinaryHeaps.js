class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let n = this.values.length - 1,
      parentIndex = Math.floor((n - 1) / 2),
      temp;
    while (this.values[parentIndex] < this.values[n]) {
      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[n];
      this.values[n] = temp;
      n = parentIndex;
      parentIndex = Math.floor((n - 1) / 2);
    }
    return this.values;
  }

  remove() {
    if (this.values.length == 0) return false;

    let removedNode,
      n = this.values.length - 1,
      mxIndex,
      leftChildInd,
      rightChildInd,
      index = 0;

    //swap
    [this.values[0], this.values[n]] = [this.values[n], this.values[0]];
    //remove max
    removedNode = this.values.pop();
    n--;

    while (true) {
      //prepare children indexes
      leftChildInd = index * 2 + 1;
      rightChildInd = index * 2 + 2;
      if (leftChildInd > n) break;

      //determine which will swapped.
      mxIndex = leftChildInd;
      if (rightChildInd <= n)
        if (this.values[mxIndex] < this.values[rightChildInd])
            mxIndex = rightChildInd;

      if (this.values[index] > this.values[mxIndex]) break;

      //swap
      [this.values[mxIndex], this.values[index]] = [
        this.values[index],
        this.values[mxIndex],
      ];

      index = mxIndex;
    }

    return removedNode;
  }
}

let h = new MaxBinaryHeap();
console.log(h.insert(1));
console.log(h.insert(2));
console.log(h.insert(3));
console.log(h.insert(4));
console.log(h.insert(5));
console.log("--------------");
console.log(h.remove());
console.log(h.values);
console.log(h.remove());
console.log(h.values);
console.log(h.remove());
console.log(h.values);
console.log(h.remove());
console.log(h.values);
console.log(h.remove());
console.log(h.values);
console.log(h.remove());
console.log(h.values);
