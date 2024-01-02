const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [A, B, C] = input.map(Number);
    const mul = (A * B * C).toString().split("").map(Number);

    for (let i = 0; i < 10; i++) {
        console.log(mul.filter((item) => item === i).length);
    }
    process.exit();
});
