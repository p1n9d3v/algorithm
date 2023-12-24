const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numbers = input[1].split(" ").map(Number);
  process.stdout.write(`${Math.max(...numbers)}`);
  process.exit();
});
