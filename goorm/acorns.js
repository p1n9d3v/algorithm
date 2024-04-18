// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map((item) => parseInt(item)));
}).on("close", function () {
    const tall = input[1];
    const birth = input[2].reverse();
    const targetBirth = input[3][0];
    const index = birth.findIndex((item) => item === targetBirth);
    if (index === -1) console.log(-1);
    else console.log(tall[tall.length - (index + 1)]);

    process.exit();
});
