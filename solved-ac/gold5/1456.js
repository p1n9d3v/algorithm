const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = null;
const sieve = new Array(1e7 + 1).fill(true);

rl.on("line", (line) => {
    input = line.split(" ").map(Number);
});

rl.on("close", () => {
    const [A, B] = input;
    initSieve();
    let count = 0;

    for (let i = 2; i * i <= B; i++) {
        if (i === 1) continue;
        if (sieve[i]) {
            for (let j = i * i; j <= B; j *= i) {
                if (j >= A) count++;
            }
        }
    }

    console.log(count);
});

function initSieve() {
    for (let i = 2; i * i <= 1e7; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= 1e7; j += i) {
                sieve[j] = false;
            }
        }
    }
}
