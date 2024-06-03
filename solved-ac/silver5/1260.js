const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const graph = {};
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    const [N, M, S] = input.shift();
    input.forEach(([a, b]) => {
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    });

    for (let key in graph) {
        graph[key].sort((a, b) => a - b);
    }

    const dfsResult = dfs(graph, S);
    const bfsResult = bfs(graph, S);

    console.log(dfsResult.join(" "));
    console.log(bfsResult.join(" "));
});

function bfs(graph, start) {
    const visited = [];
    let notVisited = [];

    notVisited.push(start);
    while (notVisited.length) {
        const node = notVisited.shift();

        if (!visited.includes(node)) {
            visited.push(node);
            if (graph[node]) {
                notVisited = [...notVisited, ...graph[node]];
            }
        }
    }

    return visited;
}

function dfs(graph, start) {
    const visited = [];
    let notVisited = [];

    notVisited.push(start);

    while (notVisited.length) {
        const node = notVisited.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            if (graph[node]) {
                notVisited = [...graph[node], ...notVisited];
            }
        }
    }

    return visited;
}
