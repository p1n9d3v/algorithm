const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, ...arr] = input;
    const newArr = arr.map((el) => el.split(" "));
    newArr.sort((a, b) => Number(a[0]) - Number(b[0]));
    console.log(newArr.map((el) => el.join(" ")).join("\n"));
    process.exit();
});
