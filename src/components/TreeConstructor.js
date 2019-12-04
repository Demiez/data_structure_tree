import Node from './NodeConstructor';

class Tree {
    constructor(data) {
        this._root = new Node(data);
    }
}

export default Tree;
