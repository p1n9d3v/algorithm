const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const one = BigInt(input[0]);
  const two = BigInt(input[1]);
  process.stdout.write(`${one + two}\n${one - two}\n${one * two}\n`);
  process.exit();
});
