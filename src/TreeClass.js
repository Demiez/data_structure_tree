import React from 'react';

class TreeClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tree: {}
        };
        this.Node = this.Node.bind(this);
        this.Tree = this.Tree.bind(this);
    }

    componentDidMount() {
        this.setState({
            tree: {...this.constructTree()}
        })
    }

    Node (data){
        this.data = data;
        this.parent = null;
        this.children = [];
    }

    Tree (data, nodeConstructor){
        const node = new Node(data);
        this._root = node;
    }

    constructTree(){
        const tree = new this.Tree('one');
        tree._root.children.push(new this.Node('two'));
        tree._root.children[0].parent = tree;

        tree._root.children.push(new this.Node('three'));
        tree._root.children[1].parent = tree;

        tree._root.children.push(new this.Node('four'));
        tree._root.children[2].parent = tree;

        tree._root.children[0].children.push(new this.Node('five'));
        tree._root.children[0].children[0].parent = tree._root.children[0];

        tree._root.children[0].children.push(new this.Node('six'));
        tree._root.children[0].children[1].parent = tree._root.children[0];

        tree._root.children[2].children.push(new this.Node('seven'));
        tree._root.children[2].children[0].parent = tree._root.children[2];
        return tree;
    }

    render() {
        const {tree} = this.state;
        console.log(tree);

        return (
            <h2>please check console [ctrl+shift+I or F12]</h2>
        )
    }
}

export default TreeClass;
