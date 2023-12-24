const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const NAME = "AJOU";
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const people = [...input].slice(1);
  const firstIndex = people.indexOf(NAME);
  const lastIndex = people.lastIndexOf(NAME);

  process.stdout.write(`${firstIndex + 1} ${lastIndex + 1}`);

  process.exit();
});
