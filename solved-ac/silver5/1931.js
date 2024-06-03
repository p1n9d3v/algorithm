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

    input.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }

        return a[0] - b[0];
    });

    let answer = 1; // 최대 회의 수
    let memY = input.shift()[1];
    for (let i = 0; i < input.length; i++) {
        if (memY > input[i][0]) {
            if (memY > input[i][1]) {
                memY = input[i][1];
            }
        } else {
            memY = input[i][1];
            answer++;
        }
    }

    console.log(answer);
    process.exit();
});
