const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
const MAX_N = 1_000_001;
const fibo = new Array(MAX_N).fill(0);
rl.on("line", (line) => {
    input.push(Number(line));
});

rl.on("close", () => {
    input.shift();

    (fibo[0] = 0), (fibo[1] = 1), (fibo[2] = 1);
    for (let i = 3; i < MAX_N; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 100_000_000;
    }
    input.forEach((n) => {
        console.log(fibo[n]);
    });
});
