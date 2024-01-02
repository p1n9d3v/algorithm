const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
    input.push(Number(line));
}).on("close", function () {
    const [N, ...arr] = input;
    console.log(arr.sort((a, b) => b - a).join("\n"));
    process.exit();
});
