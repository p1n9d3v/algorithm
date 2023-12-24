const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, arr] = input;
  const arrNum = arr.split(" ").map(Number);
  const avg = arrNum.reduce((acc, cur) => acc + cur, 0) / n;
  arrNum.sort((a, b) => {
    return Math.abs(avg - a) - Math.abs(avg - b);
  });
  process.stdout.write(
    `${arr.split(" ").map(Number).indexOf(arrNum[0]) + 1} ${arrNum[0]}`,
  );

  process.exit();
});
