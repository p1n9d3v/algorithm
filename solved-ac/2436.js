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
    const [G, L] = input.shift();
    // a * b = L / G
    const divided = L / G;
    let resultA = 0;
    let resultB = 0;
    for (let i = 1; i <= Math.sqrt(divided); i++) {
        if (divided % i === 0) {
            const a = i;
            const b = divided / i;

            if (getGcd(a, b) === 1) {
                resultA = a;
                resultB = b;
            }
        }
    }

    console.log(resultA * G, resultB * G);
});

function getGcd(a, b) {
    if (b === 0) return a;
    return getGcd(b, a % b);
}
