const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = null;
const sieve = new Array(1_000_001).fill(true);

rl.on("line", (line) => {
    input = line.split(" ").map(Number);
});

rl.on("close", () => {
    setPrime();
    const [N, M] = input;
    const answer = [];
    for (let i = N; i <= M; i++) {
        if (sieve[i]) answer.push(i);
    }

    console.log(answer.join("\n"));
});

function setPrime() {
    sieve[0] = false;

    for (let i = 2; i * i <= 1_000_001; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= 1_000_001; j += i) {
                sieve[j] = false;
            }
        }
    }
}
