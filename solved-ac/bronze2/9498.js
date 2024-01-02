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

    if (n >= 90) return "A";
    else if (n >= 80) return "B";
    else if (n >= 70) return "C";
    else if (n >= 60) return "D";
    else return "F";
}
