/*
 * 연속된 몇 칸의 좌석을 골라서 한가지 색으로 색칠 가능
 * 처음 모든색은 하얀색(0)
 * 두가지 혼색 x
 * 가장 많은 좌석이 가진 색 , 반대로 가장 적은 좌석이 가진 색
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    const seat = paint();
    const [min, max] = getMaxMinColor(seat);

    console.log(`${max}\n${min}`);
});

/*
 * S1 ~ Sn-1 = 0
 * draw paint, if arr[i] !== 0 then continue
 * compare max count paint
 */
function paint() {
    const [N, M] = input.shift();
    const seat = new Array(N).fill(0);
    input.forEach(([left, right, color]) => {
        for (let i = left - 1; i <= right - 1; i++) {
            seat[i] = color;
        }
    });

    return seat;
}

function getMaxMinColor(seat) {
    const colors = new Array(100).fill(0);
    seat.forEach((color) => {
        colors[color]++;
    });
    let min = -1;
    let max = -1;

    colors.forEach((count, color) => {
        if (count !== 0) {
            if (min === -1 || colors[min] > count) {
                min = color;
            }
            if (max === -1 || colors[max] < count) {
                max = color;
            }
        }
    });

    return [min, max];
}
