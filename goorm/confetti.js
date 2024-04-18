const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const testcase = parseInt(input.shift());
    for (let i = 0; i < testcase; i++) {
        const arr = Array.from(new Array(100), () => new Array(100).fill(0));
        const conffetiCount = input.shift();
        let count = 0;

        for (let i = 0; i < conffetiCount; i++) {
            const [x, y] = input.shift().split(" ").map(Number);

            count += fill(arr, x, y);
        }

        console.log(count);
    }

    process.exit();
});

function fill(arr, x, y) {
    let count = 0;
    for (let i = x; i < x + 10; i++) {
        for (let j = y; j < y + 10; j++) {
            if (arr[i][j] === 0) count++;
            arr[i][j] = 1;
        }
    }

    return count;
}
