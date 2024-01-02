const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const arr = input.map(Number);
    const max = Math.max(...arr);
    console.log(max);
    console.log(arr.indexOf(max) + 1);
    process.exit();
});
