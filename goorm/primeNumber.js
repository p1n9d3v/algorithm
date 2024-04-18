const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    const [_, ...rest] = input;
    rest.forEach((n, i) => {
        answer(i + 1, n);
    });
});

function isPrime(n) {
    if (n === 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i < Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}
function answer(i, n) {
    process.stdout.write(`Case #${i}\n`);
    process.stdout.write(`${isPrime(n) ? "YES" : "NO"}\n`);
}
