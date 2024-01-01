const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    console.log(solve());
    process.exit();
});

function solve() {
    const n = Number(input[0]);
    let sum = 0;
    for (let i = 1; i <= n; i += 1) {
        sum += (i * (1 + i)) / 2;
    }

    return sum;
}
