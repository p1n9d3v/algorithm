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
    const [M, N] = input.shift();
    const luckyArr = new Array(M).fill(0);

    input.forEach((memberNumber) => {
        let answer = -1;
        const number = getLuckyNumber(memberNumber, M);
        for (let i = number; i < M; i++) {
            if (luckyArr[i] === 0) {
                luckyArr[i] = 1;
                answer = i;
                break;
            }
        }
        if (answer === -1) {
            for (let i = 0; i < number; i++) {
                if (luckyArr[i] === 0) {
                    luckyArr[i] = 1;
                    answer = i;
                    break;
                }
            }
        }

        console.log(answer);
    });
});

// get lucky number
function getLuckyNumber(memberNumber, totalLuckyNumber) {
    return memberNumber % totalLuckyNumber;
}
