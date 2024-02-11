const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

const n = 123_457;
const sieve = new Array(2 * n).fill(false);
const answer = [];
rl.on("line", (line) => {
    input.push(Number(line));
});

rl.on("close", () => {
    initialSieve();
    input.pop();
    input.forEach((num) => {
        let count = 0;
        for (let i = num + 1; i <= 2 * num; i++) {
            if (!sieve[i]) {
                count++;
            }
        }
        answer.push(count);
    });

    console.log(answer.join("\n"));
});

function initialSieve() {
    sieve[0] = true;
    sieve[1] = true;
    for (let i = 2; i * i <= 2 * n; i++) {
        for (let j = i * i; j <= 2 * n; j += i) {
            sieve[j] = true;
        }
    }
}
