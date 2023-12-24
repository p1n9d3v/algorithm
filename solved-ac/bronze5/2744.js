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
  const result = toggleUpperLower(n);
  process.stdout.write(`${result}\n`);
});

function toggleUpperLower(str) {
  return str
    .split("")
    .map((ch) => {
      if (isUpper(ch)) return ch.toLowerCase();
      else return ch.toUpperCase();
    })
    .join("");
}

function isUpper(ch) {
  return ch === ch.toUpperCase();
}

function isLower(ch) {
  return ch === ch.toLowerCase();
}
