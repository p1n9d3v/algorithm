const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
});

const sieve = new Array(1001).fill(true);
rl.on("close", () => {
    input.shift();
    setPrimeNumberToSieve();

    let count = 0;

    input[0].forEach((num) => {
        sieve[num] && count++;
    });

    console.log(count);
});

function setPrimeNumberToSieve() {
    sieve[0] = false;
    sieve[1] = false;
    sieve[2] = true;

    for (let i = 2; i * i <= sieve.length; i++) {
        if (sieve[i] === false) continue;
        for (let j = i * i; j < sieve.length; j += i) {
            sieve[j] = false;
        }
    }
}
