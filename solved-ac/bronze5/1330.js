const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  const [a, b] = line.split(" ").map(Number);
  process.stdout.write(`${answer(a, b)}`);
  rl.close();
}).on("close", function () {
  process.exit();
});

function answer(a, b) {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  }
  return "==";
}
