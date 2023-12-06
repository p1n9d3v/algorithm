const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const lines = Number(line);
  printStar(lines);
  rl.close();
}).on("close", function () {
  process.exit();
});

function printStar(lines) {
  for (let i = 0; i < lines; i += 1) {
    console.log("*".repeat(i + 1));
  }
}
