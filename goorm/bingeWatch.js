// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    const [N, E] = input;
    let min = 1e9;
    let max = 0;
    E.forEach((e) => {
        if (min > e) min = e;
        if (max < e) max = e;
    });

    const expected = min + E.length - 1;
    const received = max;
    if (received === expected) console.log("YES");
    else console.log("NO");
});
