const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input;
const answer = [];
// gcd(b , a%b) , if a%b === 0 then b is gc
// lcm(a,b) = a * b / gcd(a,b) or b * a / gcd(b,a) , befacreful of overflow
rl.on("line", (line) => {
    input = line.split(" ").map((el) => parseInt(el));
}).on("close", () => {
    const [a, b] = input;
    const g = gcd(a, b);
    const l = lcm(a, b, g);
    answer.push(g);
    answer.push(l);
    console.log(answer.join("\n"));
    process.exit();
});

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b, gcd) {
    return a * Math.floor(b / gcd);
}
