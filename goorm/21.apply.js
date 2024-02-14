const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const answer = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
});

rl.on("close", () => {
    const [_, ...arr] = input;
    solve(...arr);

    console.log(answer.join(" "));
});

function solve(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (
            (i === 0 || arr[i - 1] !== arr[i]) &&
            (i === arr.length - 1 || arr[i + 1] !== arr[i])
        ) {
            answer.push(arr[i]);
        }
    }
}
