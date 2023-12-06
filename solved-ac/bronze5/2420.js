const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  const [a, b] = line.split(" ").map(Number);
  console.log(Math.abs(a - b));
  rl.close();
}).on("close", function () {
  process.exit();
});
