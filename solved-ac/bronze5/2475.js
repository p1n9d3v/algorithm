const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  const numbers = line.split(" ").map(Number);
  process.stdout.write(`${getValidationNumber(numbers)}`);
  rl.close();
}).on("close", function () {
  process.exit();
});

function getValidationNumber(numbers) {
  return numbers.reduce((acc, cur) => acc + cur ** 2, 0) % 10;
}
