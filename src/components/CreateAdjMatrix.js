// Adjacency matrix for prim's alg
const createAdjMatrix = (V, G) => {
    const adjMatrix = [];
    // create N x N matrix filled with 0 edge weights between all vertices
    for (let i = 0; i < V; i++) {
        adjMatrix.push([]);
        for (let j = 0; j < V; j++) { adjMatrix[i].push(0); }
    }
    // populate adjacency matrix with correct edge weights
    for (var i = 0; i < G.length; i++) {
        adjMatrix[G[i][0]][G[i][1]] = G[i][2];
        adjMatrix[G[i][1]][G[i][0]] = G[i][2];
    }
    return adjMatrix;
};

export default createAdjMatrix;
