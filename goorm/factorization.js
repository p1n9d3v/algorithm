// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 10억 이하니 32000 이하의 소수를 일단 찾음
// 찾은 소수로 나누어가며 소인수 분해
// 나눠진 소수는 answer 배열에 추가

const input = [];
let answer = [];

rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    getPrime();
    const N = input.shift();

    input.forEach((n, i) => {
        console.log(`#${i + 1}:`);
        console.log(answer.join(" "));
        answer = [];
    });
});

function factorization(n) {
    for (let i = 2; i <= n * n; i++) {
        while (n % i === 0) {
            n /= i;
            answer.push(i);
        }
    }
    if (n > 1) answer.push(n);
}
