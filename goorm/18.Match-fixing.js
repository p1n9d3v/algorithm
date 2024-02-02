// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, M] = input.shift().split(" ").map(Number);
    const arr = input[0].split(" ").map((el) => Number(el));
    let startCur = 0;
    let sum = 0;
    let isEven = false;
    for (let i = 0; i < M; i++) {
        sum += arr[i];
    }

    if (sum % 2 === 0) {
        console.log("YES");
        process.exit();
    }

    while (startCur + M <= N) {
        sum -= arr[startCur] + arr[startCur + M];
        if (sum % 2 === 0) {
            isEven = true;
            break;
        }
        startCur++;
    }

    if (isEven) console.log("YES");
    else console.log("NO");
    process.exit();
});
