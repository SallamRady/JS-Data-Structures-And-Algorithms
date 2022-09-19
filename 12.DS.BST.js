class Node{
    constructor(val) {
        this.val = val;
        this.frq = 1;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    /**
     * insert(val) : Adding a node to the tree.
     * complexity -worest case-> O(log(n))
     * @param {*} val node value.
     * @returns tree.
     */
    insert(val){
        let newNode = new Node(val);
        if(this.root == null){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true){
            if(val == current.val){
                current.frq++;
                return this;
            }

            if(val < current.val){
                //left haif
                if(current.left == null){
                    current.left = newNode;
                    return this;
                }else{
                    current = current.left;
                }
            }else{
                //right haif
                if(current.right == null){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right;
                }
            }
        }
    }
    /**
     * search(val) : check if tree content this value or not.
     * complexity -worest case-> O(log(n))
     * @param {*} val value which we will search about it in tree
     * @returns true || false
     */
    search(val){
        if(this.root == null)
            return false;
        
        let current = this.root;
        while(true){
            if(val == current.val)
                return true;
            
            if(val < current.val){
                //left
                if(current.left == null)
                    return false;
                
                current = current.left;
            }else{
                //right
                if(current.right == null)
                    return false;
                
                current = current.right;
            }
        }
    }

    BFS(){
        let node,q = [],visited = [];
        if(this.root != null)
            q.push(this.root);
        
        while(q.length){
            node = q.shift();
            visited.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }

        return visited;    
    }

    DFSPreOrder(){
        let visited = [];
        function traverse(node){
            visited.push(node.val);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }
        if(this.root)traverse(this.root);
        return visited;
    }

    DFSPostOrder(){
        let visited = [];
        function traverse(node){
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            visited.push(node.val);
        }
        if(this.root)traverse(this.root);
        return visited;
    }

    DFSInOrder(){
        let visited = [];
        function traverse(node){
            if(node.left)traverse(node.left);
            visited.push(node.val);
            if(node.right)traverse(node.right);
        }
        if(this.root)traverse(this.root);
        return visited;  
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(13);
tree.insert(5);
tree.insert(7);
tree.insert(2);
tree.insert(11);
tree.insert(15);

//tree
//        10
//   5           13
//2     7    11      15

console.log('--------------');
console.log(tree);
console.log(tree.search(17));
console.log(tree.search(0));
console.log(tree.search(7));
console.log(tree.search(11));
console.log('--------------');
console.log(tree.BFS());
console.log('--------------');
console.log(tree.DFSPreOrder());
console.log('--------------');
console.log(tree.DFSPostOrder());
console.log('--------------');
console.log(tree.DFSInOrder());