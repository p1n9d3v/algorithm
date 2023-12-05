const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [amount, count] = line.split(" ").map(BigInt);
  answer(amount, count);

  rl.close();
}).on("close", () => {
  process.exit();
});

const answer = (amount, count) => {
  const quotient = amount / count;
  const remainder = amount % count;

  console.log(quotient.toString());
  console.log(remainder.toString());
};
