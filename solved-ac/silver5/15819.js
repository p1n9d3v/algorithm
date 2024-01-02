const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, ...arr] = input;
    arr.sort();
    const index = Number(N.split(" ")[1]) - 1;
    console.log(arr[index]);
    process.exit();
});
