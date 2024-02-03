// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(Number(line));
}).on("close", function () {
    const N = input.shift();
    const result = solution(input);
    console.log(result.toString().padStart(4, "0"));
    process.exit();
});

function solution(input) {
    const arr = Array(10_000).fill(0);

    input.forEach((el) => {
        arr[el] += 1;
    });

    let max = 0;
    let number = 0;
    arr.forEach((el, idx) => {
        if (el > max) {
            number = idx;
            max = el;
        }
    });

    return number;
}
