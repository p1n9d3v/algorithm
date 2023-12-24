const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
rl.on("line", function (line) {
  n = parseInt(line);
  rl.close();
});
rl.on("close", function () {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(`${i}\n`);
  }
});
