const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 뽑은 두 카드의 합이 지정된 자연수와 일치하면 당첨(중복 가능)
// 당첨 번호가 두 카드의 합으로 만들 수 있는지

const input = [];
const winnings = new Array(101).fill(0);
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    input.shift();
    const cards = input.shift();
    const winningNumbers = input.shift();
    let count = 0;
    // card를 모두 순회
    // winningNumbers[x] - card[i] 가 card에 있는지 확인, 단 중복이 가능하기 때문에 뽑은 카드도 같이 계
    // 있으면 count++
    cards.sort((a, b) => a - b);
    cards.forEach((card) => {
        winningNumbers.forEach((wc) => {
            const target = wc - card;
            if (target < 0) return;
            const result = binarySearch(target, cards);
            if (result === 1) {
                if (!winnings[wc]) {
                    count++;
                    winnings[wc] = 1;
                }
            }
        });
    });

    console.log(count);
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
