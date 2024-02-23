const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let answer = "";
const input = [];
const sieve = new Array(1_000_001).fill(false);
const primes = [];
rl.on("line", (line) => {
    input.push(Number(line));
});

rl.on("close", () => {
    input.pop();
    sieve[0] = sieve[1] = true;
    for (let i = 2; i * i <= sieve.length - 1; i++) {
        if (!sieve[i]) {
            for (let j = i * i; j <= sieve.length - 1; j += i) {
                sieve[j] = true;
            }
        }
        if (!sieve[i]) primes.push(i);
    }

    console.log(
        input
            .map((num) => {
                const remain =
                    num - primes.find((prime) => !sieve[num - prime]);
                return remain
                    ? `${num} = ${num - remain} + ${remain}`
                    : "Goldbach's conjecture is wrong.";
            })
            .join("\n"),
    );
});
