import createAdjMatrix from './CreateAdjMatrix';

const primsAlgorithm = (V, G) => {
    // create adj matrix from graph + initNode
    const adjMatrix = createAdjMatrix(V, G);
    let initialNode = 0;
    // empty inits
    let MST = [];
    let edges = [];
    let visited = [];
    let minEdge = [null,null,Infinity];

    // run prims algorithm until we create an MST
    // that contains every node from the graph
    while (MST.length !== V-1) {
        // mark this initial Node as visited
        visited.push(initialNode);

        // add each edge to list of potential edges
        for (let r = 0; r < V; r++) {
            if (adjMatrix[initialNode][r] !== 0) {
                edges.push([initialNode,r,adjMatrix[initialNode][r]]);
            }
        }

        // find edge with the smallest weight to a node that has not yet been visited
        for (let e = 0; e < edges.length; e++) {
            if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) {
                minEdge = edges[e];
            }
        }

        // remove min weight edge from list of edges
        edges.splice(edges.indexOf(minEdge), 1);

        // push min edge to MST
        MST.push(minEdge);

        // start at new node and reset min edge
        initialNode = minEdge[1];
        minEdge = [null,null,Infinity];
    }

    return MST;
};

export default primsAlgorithm;
