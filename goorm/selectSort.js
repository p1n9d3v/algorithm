const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const arr = input[1].split(" ").map(BigInt);
    for (let i = 0; i < arr.length; i += 1) {
        let index = i;
        let min = arr[i];
        for (let j = i; j < arr.length; j += 1) {
            if (min > arr[j]) {
                min = arr[j];
                index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    process.stdout.write(`${arr.join(" ")}`);
    process.exit();
});
