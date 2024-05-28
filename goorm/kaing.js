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
    input.forEach(([M, N, x, y]) => {
        const l = lcm(M, N);

        let result = -1;
        for (let i = x; i <= l; i += M) {
            if ((i - 1) % N === y - 1) {
                result = i;
                break;
            }
        }

        console.log(result);
    });
    process.exit();
});

function lcm(a, b) {
    let _a = a;
    let _b = b;
    while (_b !== 0) {
        let r = _a % _b;
        _a = _b;
        _b = r;
    }

    return (a * b) / _a;
}
