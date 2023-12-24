const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
/**
 * if '(' push stack
 * if ')' pop stack
 * 	if stack is empty -> Wrong
 * if input is end , stack is  empty -> Correct
 * stack is not empty -> Wrong
 */
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [_, ...strs] = input;
  strs.forEach((str) => {
    const result = solution(str);
    if (result) process.stdout.write("YES\n");
    else process.stdout.write("NO\n");
  });
  process.exit();
});

function solution(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str.at(i) === "(") stack.push(str.at(i));
    else if (str.at(i) === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  if (!stack.length) return true;
  return false;
}
