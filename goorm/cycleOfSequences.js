// Run by Node.js
// 환경이 이상함
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    const N = input.shift();
    const arr = input.shift();

    const answer = findFirstCommonCycle(N, arr);
    console.log(answer + 1);
});

function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findFirstCommonCycle(n, cycles) {
    let lcmValue = cycles[0];
    for (let i = 1; i < n; i++) {
        lcmValue = lcm(lcmValue, cycles[i]);
    }
    return lcmValue;
}
