// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    input.shift();
    input.forEach((v, i) => {
        answer(v[0], v[1], i + 1);
    });
});

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function answer(a, b, idx) {
    console.log(`Case #${idx}:`);
    const g = gcd(a, b);
    const lcm = Math.floor((a * b) / g);
    console.log(g, lcm);
}
