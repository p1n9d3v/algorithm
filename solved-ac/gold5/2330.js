const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

/**
 * S := a[i] - a[j]  >= M
 * Min(S[])
 */
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [N, M] = input[0].split(" ").map(Number);
    const [_, ...arr] = input;
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = 0;
    let diff = Infinity;

    while (start <= end && end < N) {
        const curDiff = arr[end] - arr[start];
        if (curDiff < M) {
            end++;
        } else {
            diff = Math.min(diff, curDiff);
            start++;
        }
    }
    console.log(diff);
});
