const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

/*
 * n[i] , n[l] 을 더한 값을 저장
 * i > l 루프 종료
 * absi(n[i]) < abs(n[l]) i++ , else l--
 * abs(n[i] + n[l])이 그 전 값보다 작으면 result 교체
 */

rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    const [_, arr] = input;
    arr.sort((a, b) => a - b);
    let i = 0;
    let l = arr.length - 1;
    const obj = {
        start: arr[i],
        end: arr[l],
        sum: arr[i] + arr[l],
    };

    while (i < l) {
        if (Math.abs(arr[i] + arr[l]) <= Math.abs(obj.sum)) {
            obj.start = arr[i];
            obj.end = arr[l];
            obj.sum = arr[i] + arr[l];
        }
        if (Math.abs(arr[i]) < Math.abs(arr[l])) l--;
        else i++;
    }

    console.log(`${obj.start} ${obj.end}`);
});
