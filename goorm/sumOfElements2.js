/**
 * 놀이기구를 탈 수 있는 사람은 몇 명인지
 * 체중 제한을 통과한 사람들은 모두 함께 놀이기구를 탈 수 있는지
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [l1, l2] = input;
  const [n, w, q] = l1.split(" ").map((e) => parseInt(e));
  const p = l2.split(" ").map((e) => parseInt(e));

  const { total, size, isPossible } = answer(p, w, q);
  process.stdout.write(`${size} ${total}\n`);
  process.stdout.write(`${isPossible ? "YES" : "NO"}`);
  process.exit();
});

/**
 * W <= P
 * Sum(W(0) ~ W(n-1)) <= Q
 */
const answer = (p, w, q) => {
  const filteredP = p.filter((el) => el <= w);
  const sumWeight = filteredP.reduce((acc, cur) => acc + cur, 0);
  return {
    total: sumWeight,
    size: filteredP.length,
    isPossible: filteredP.reduce((acc, cur) => acc + cur, 0) <= q,
  };
};
