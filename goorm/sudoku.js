// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(Number(line));
}).on("close", function () {
    input.shift();
    input.forEach((v, idx) => {
        const r = getRow(v);
        const c = getCol(v);
        console.log(`Case #${idx + 1}:`);
        console.log(r + 1, c + 1, getGroup(r, c));
    });
});

function getRow(number) {
    return Math.floor((number - 1) / 9);
}

function getCol(number) {
    return Math.floor((number - 1) % 9);
}

function getGroup(row, col) {
    const rowGroup = Math.floor(row / 3);
    const colGroup = Math.floor(col / 3) + 1;

    return rowGroup * 3 + colGroup;
}
