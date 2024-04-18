const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

const intervalSumArr = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, M] = input.shift().split(" ").map(Number);
    // N is the count of cards and M is a number of fan
    const cards = input.shift().split(" ").map(Number);
    fillInSumArr(cards);
    let prevMax = -1;
    let prevIndex = -1;
    input.forEach((el, index) => {
        const [left, right] = el.split(" ").map(Number);
        const max = intervalSumArr[right - 1] - intervalSumArr[left - 2];
        if (prevMax < max) {
            prevIndex = index + 1;
            prevMax = max;
        }
    });

    console.log(prevIndex + " " + prevMax);
});

// 각 index 까지의 구간합을 미리 구함
// left, right가 들어올 때 maxinCard[right] - maxinCard[left-1]을 하면 구간합을 구할 수 있음

function fillInSumArr(cards) {
    let prevSum = 0;
    for (let i = 0; i < cards.length; i++) {
        const sum = prevSum + cards[i];
        intervalSumArr.push(sum);
        prevSum = sum;
    }
}
