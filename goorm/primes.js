// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const LIMIT = 1000000;
const sieve = new Array(LIMIT + 1).fill(true);
const input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    input.shift();
    sieve[0] = false;
    sieve[1] = false;
    calcSieves();

    input.forEach((els, i) => {
        console.log(`Case #${i + 1}:`);
        console.log(countPrimes(els[0], els[1]));
    });
    process.exit();
});

function calcSieves() {
    for (let i = 2; i <= sieve.length; i++) {
        if (!sieve[i]) continue;
        for (let j = i * i; j * j <= sieve.length; j += i) {
            sieve[j] = false;
        }
    }
}

function countPrimes(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (sieve[i]) count++;
    }

    return count;
}
