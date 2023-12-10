const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const unit = parseInt(input[0]);
  for (let i = 1; i < 10; i += 1) {
    process.stdout.write(`${unit} * ${i} = ${unit * i}\n`);
  }
  process.exit();
});
