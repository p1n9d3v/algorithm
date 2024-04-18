// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [numberOfPeople, misuTall, jisuTall] = input[0].split(" ").map(Number);
  const heightOfPeople = input[1].split(" ").map(Number);
  process.stdout.write(`${answer(misuTall, jisuTall, heightOfPeople)}`);
  process.exit();
});

// 최대 몇 명의 사람들을 확인해야 하는지 비교
// 미주, 지수의 키가 같은 사람만 보기로함
// P[i] === m || P[i] === j 라면 count++
const answer = (misu, jisu, people) => {
  const filteredPeople = people.filter((p) => p === misu || p === jisu);
  return filteredPeople.length;
};
