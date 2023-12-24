const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
/**
 * 윤년 % 4 == 0 && % 100 !== 0 || % 400 == 0
 */
rl.on("line", function (line) {
  n = parseInt(line);
  rl.close();
});
rl.on("close", function () {
  if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    process.stdout.write("1");
  } else {
    process.stdout.write("0");
  }
});
