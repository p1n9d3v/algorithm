const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const count = input[0];
  const numbers = input[1].split(" ").map(Number);

  process.stdout.write(`${answer(numbers)}`);

  process.exit();
});

const answer = (input) => {
  return input.reduce((acc, cur) => acc + cur, 0);
};
