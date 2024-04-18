const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // N , M<= 1,000,000
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  // if no exist in arr return -1
  const idx = numbers.indexOf(M);
  process.stdout.write(`${idx}`);
  process.exit();
});
