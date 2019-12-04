import React from 'react';
import Node from './components/NodeConstructor';
import Tree from './components/TreeConstructor';
import primsAlgorithm from './components/PrimsAlgorithm';

class TreeClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tree: {},
        };
    }

    UNSAFE_componentWillMount() {
        this.setState({
            tree: {...this.constructDefaultTree()}
        })
    }

    constructDefaultTree = () =>{
        const tree = new Tree('one');
        tree._root.children.push(new Node('two'));
        tree._root.children[0].parent = tree;

        tree._root.children.push(new Node('three'));
        tree._root.children[1].parent = tree;

        tree._root.children.push(new Node('four'));
        tree._root.children[2].parent = tree;

        tree._root.children[0].children.push(new Node('five'));
        tree._root.children[0].children[0].parent = tree._root.children[0];

        tree._root.children[0].children.push(new Node('six'));
        tree._root.children[0].children[1].parent = tree._root.children[0];

        tree._root.children[2].children.push(new Node('seven'));
        tree._root.children[2].children[0].parent = tree._root.children[2];

        return tree;
    };

    treeHeightCounter = 0;

    traverseDeepFirst = (tree) => {
        for (let [key, node] of Object.entries(tree)){
            if (typeof node == 'object') {
                console.log(key,node);
                if (node.children) {
                    for (let i = 0; i < node.children.length; i++){
                        console.log(key, node.children[i]);
                        this.treeHeightCounter++;
                        this.traverseDeepFirst(node.children[i])
                    }
                }
            }
        }
    };

    traverseBreadthFirst = (tree) => {
        for (let node of Object.values(tree)) {
                Object.entries(node).forEach(([key, node]) => {
                    if (Array.isArray(node)){
                        node.map(item => console.log(item))
                        this.traverseBreadthFirst(node)
                    }
                });
        }
    };

    addChild = (data, to) => {
        const {tree} = this.state;
        const child = new Node(data);
        function traverse (tree) {
            for (let node of Object.values(tree)) {
                if(node.data === to) {
                    const index = node.children.length;
                    console.log("Found: => ",node);
                    node.children.push(child);
                    node.children[index].parent = node;
                    console.log("Done: =>", node);
                    return
                }
                Object.entries(node).forEach(([key, node]) => {
                    if (Array.isArray(node)){
                        traverse(node)
                    }
                });
            }
        }
        traverse(tree);
        return tree;
    };

    removeChild = (data) => {
        const {tree} = this.state;
        function traverse (tree) {
            for (let node of Object.values(tree)) {
                if(node.data === data) {
                    const children = node.parent.children;
                    for (let i = 0; i < children.length; i++) {
                        if (children[i].data === data) {
                            children.splice(i,1)
                        }
                    }
                    console.log("Removed: =>", data, "from", node.parent);
                    return
                }
                Object.entries(node).forEach(([key, node]) => {
                    if (Array.isArray(node)){
                        traverse(node)
                    }
                });
            }
        }
        traverse(tree);
        return tree;
    };

    // Implementation of Prim's algorithm for MST and traverse (tasks 3,4)
    applyPrimsAlgorithm() {
        // we will represent graph vertices as numbers - 1
        const one = 0, two = 1, three = 2, four = 3, five = 4, six = 5;
        // add edges with weights
        const graph = [
            [one,two,2],
            [one,three,3],
            [two,four,3],
            [two,three,5],
            [two,five,4],
            [three,five,4],
            [four,five,2],
            [four,six,3],
            [five,six,5]
        ];
        // pass N of vertices and the graph to run prims algorithm
        console.log("Using Prim's Algorithm: \n", primsAlgorithm(6, graph));
    }

    render() {
        const {tree} = this.state;
        console.log(tree);

        console.log("Using DFT Algorithm: \n\n");
        this.traverseDeepFirst(tree);
        console.log(`Current height of tree in state: ${this.treeHeightCounter}`);

        console.log("Using BFT Algorithm: \n\n");
        this.traverseBreadthFirst(tree);

        this.addChild('nine', 'two');
        console.log("Checking state:", this.state.tree);

        this.removeChild('nine');
        console.log("Checking state:", this.state.tree);

        this.applyPrimsAlgorithm();

        return (
            <h2>please check console [ctrl+shift+I or F12], then F5 to see extended object notations</h2>
        )
    }
}

export default TreeClass;
