const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    const [N, ...points] = input;
    points.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[0] - b[0];
    });

    console.log(points.map((point) => point.join(" ")).join("\n"));
    process.exit();
});
