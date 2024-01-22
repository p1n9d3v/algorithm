const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    const [N, arr] = input;
    solve(arr);
    console.log(arr.join(" "));
    process.exit();
});

function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
