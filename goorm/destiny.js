const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    const [N, ...arr] = input;

    const positionArr = arr.map(([x, y]) => createPosition(x, y));
    let minDistance = Number.MAX_SAFE_INTEGER;
    let count = 0;
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            const distance = getDistance(positionArr[i], positionArr[j]);
            if (minDistance > distance) {
                minDistance = distance;
                count = 1;
            } else if (minDistance === distance) {
                count++;
            }
        }
    }

    console.log(Math.sqrt(minDistance).toFixed(1));
    console.log(count);
});

function createPosition(x, y) {
    return {
        x,
        y,
    };
}
function getDistance(a, b) {
    return Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2;
}
