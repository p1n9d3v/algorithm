const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [a, b] = line.split(" ").map(Number);
  process.stdout.write(`${a - b}\n`);
  rl.close();
}).on("close", () => {
  process.exit();
});
