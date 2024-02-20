const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let cnt2 = 0;
let cnt5 = 0;
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
});

rl.on("close", () => {
    const [n, r] = input[0];
    f1(n);
    f2(r, n - r);
    const countZeroes = Math.min(cnt2, cnt5);
    if (countZeroes <= 0) {
        console.log(0);
        process.exit();
    }

    console.log(countZeroes);
});

function f1(num) {
    let k = 2;
    while (k <= num) {
        cnt2 += Math.floor(num / k);
        k *= 2;
    }

    k = 5;
    while (k <= num) {
        cnt5 += Math.floor(num / k);
        k *= 5;
    }
}

function f2(r, nr) {
    let k = 2;
    while (k <= r) {
        cnt2 -= Math.floor(r / k);
        k *= 2;
    }
    k = 2;
    while (k <= nr) {
        cnt2 -= Math.floor(nr / k);
        k *= 2;
    }

    k = 5;
    while (k <= r) {
        cnt5 -= Math.floor(r / k);
        k *= 5;
    }
    k = 5;
    while (k <= nr) {
        cnt5 -= Math.floor(nr / k);
        k *= 5;
    }
}
