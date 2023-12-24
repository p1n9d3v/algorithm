const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
rl.on("line", function (line) {
  n = line.trim();
  rl.close();
});
rl.on("close", function () {
  process.stdout.write(n.length + "\n");
});
