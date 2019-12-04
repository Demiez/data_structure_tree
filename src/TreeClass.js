import React from 'react';
import Node from './components/NodeConstructor';
import Tree from './components/TreeConstructor';

class TreeClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tree: {},
        };
    }

    componentDidMount() {
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

    render() {
        const {tree} = this.state;
        console.log(tree);

        this.traverseDeepFirst(tree);
        console.log(`Current height of tree in state: ${this.treeHeightCounter}`);

        return (
            <h2>please check console [ctrl+shift+I or F12]</h2>
        )
    }
}

export default TreeClass;
