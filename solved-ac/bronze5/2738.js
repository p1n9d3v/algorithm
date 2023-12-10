const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const A = [];
  const B = [];
  for (let i = 0; i < N; i += 1) {
    A.push(input[i + 1].split(" ").map(Number));
    B.push(input[i + 1 + N].split(" ").map(Number));
  }
  const result = sumMaxtrix(A, B);

  result.forEach((row) => process.stdout.write(`${row.join(" ")}\n`));
  process.exit();
});

const sumMaxtrix = (A, B) => {
  const result = [];
  A.forEach((row, rIdx) => {
    const sumRow = [];
    row.forEach((ele, eIdx) => {
      sumRow.push(ele + B[rIdx][eIdx]);
    });
    result.push(sumRow);
  });

  return result;
};
