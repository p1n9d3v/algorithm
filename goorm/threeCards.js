const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 뽑은 두 카드의 합이 지정된 자연수와 일치하면 당첨(중복 가능)
// 당첨 번호가 두 카드의 합으로 만들 수 있는지

const input = [];
const answer = new Set();
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    input.shift();
    const cards = input.shift();
    const targets = input.shift();
    const sums = new Set();
    // 모든 카드 쌍의 합을 sums에 저장
    for (let i = 0; i < cards.length; i++) {
        for (let j = i; j < cards.length; j++) {
            sums.add(cards[i] + cards[j]);
        }
    }
    cards.sort((a, b) => a - b);
    cards.forEach((card) => {
        targets.forEach((target) => {
            const r = target - card;
            if (sums.has(r)) answer.add(target);
            // if (binarySearch(r, cards) === 1) answer.add(card).add(r);
            // if (cards.includes(r)) answer.add(card).add(r);
        });
    });

    const result = [];
    for (v of answer.values()) {
        result.push(v);
    }
    if (result.length === 0) console.log("NO");
    else console.log(result.sort((a, b) => a - b).join(" "));

    // if (answer.length === 0) {
    //     console.log("NO");
    // } else {
    //     console.log(answer.join(" "));
    // }

    process.exit();
});

function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        if (target === arr[mid]) return 1;

        if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

        mid = Math.floor((start + end) / 2);
    }

    return -1;
}
