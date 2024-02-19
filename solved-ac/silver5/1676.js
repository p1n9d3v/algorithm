const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const arr = new Array(10).fill(0);
arr[0] = 1;
arr[1] = 1;

let input = 0;
rl.on("line", (line) => {
    input = Number(line);
});

rl.on("close", () => {
    let k = 2;
    let cnt2 = 0;
    let cnt5 = 0;
    while (k <= input) {
        cnt2 += Math.floor(input / k);
        k *= 2;
    }

    k = 5;
    while (k <= input) {
        cnt5 += Math.floor(input / k);
        k *= 5;
    }

    console.log(Math.min(cnt2, cnt5));
});
