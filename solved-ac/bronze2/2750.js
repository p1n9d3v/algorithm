const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
});
rl.on("close", function () {
    const [_, ...arr] = input;
    arr.sort((a, b) => a - b);
    arr.forEach((v) => console.log(v));
    process.exit();
});
