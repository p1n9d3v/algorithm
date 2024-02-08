const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
});

rl.on("close", () => {
    const { numerator, denominator } = fractionSum(input);
    const gcdNum = gcd(numerator, denominator);
    console.log(`${numerator / gcdNum} ${denominator / gcdNum}`);
});

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function fractionSum(nums) {
    const [a1, b1] = nums;
    return {
        numerator: a1[0] * b1[1] + a1[1] * b1[0],
        denominator: a1[1] * b1[1],
    };
}
