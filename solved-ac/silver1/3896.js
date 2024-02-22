const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const sieve = new Array(1299710).fill(true);

rl.on("line", (line) => {
    input.push(Number(line));
});

rl.on("close", () => {
    eratosthenes();
    input.shift();
    input.forEach((p) => {
        const isPrime = sieve[p];
        if (isPrime) {
            console.log(0);
        } else {
            let cnt = 0;
            let left = p;
            while (!sieve[left]) {
                cnt++;
                left--;
            }
            let right = p + 1;
            while (!sieve[right]) {
                cnt++;
                right++;
            }

            console.log(cnt + 1);
        }
    });
});

function eratosthenes() {
    sieve[0] = sieve[1] = false;
    for (let i = 2; i <= Math.sqrt(sieve.length); i++) {
        if (sieve[i]) {
            for (let j = i * i; j < sieve.length; j += i) {
                sieve[j] = false;
            }
        }
    }
}
