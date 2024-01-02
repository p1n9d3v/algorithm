const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input;
rl.on("line", function (line) {
    input = line;
}).on("close", function () {
    const arr = [];
    const inputArr = input.split("");
    inputArr.forEach((v, i) => {
        arr.push(input.slice(i));
    });
    arr.sort();
    console.log(arr.join("\n"));
    process.exit();
});
