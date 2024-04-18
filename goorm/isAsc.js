const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    const arr = input[1];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] > arr[i]) {
            console.log("NO");
            process.exit();
        }
    }
    console.log("YES");
    process.exit();
});
