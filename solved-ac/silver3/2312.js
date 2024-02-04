const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
const answer = [];
rl.on("line", (line) => {
    input.push(Number(line));
}).on("close", () => {
    const N = input.shift();

    input.forEach((el) => {
        for (let i = 2; i <= el; i++) {
            let cnt = 0;
            while (el % i === 0) {
                el /= i;
                cnt += 1;
            }
            if (cnt) answer.push([i, cnt].join(" "));
        }
    });
    console.log(answer.join("\n"));
    process.exit();
});
