const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const A = input[1].split(" ").map(BigInt);
    const B = input[3].split(" ").map(BigInt);
    const result = new Array(B.length).fill(0);

    A.sort((a, b) => (a < b ? -1 : 1));
    B.forEach((b, i) => {
        let low = 0;
        let high = A.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (A[mid] === b) {
                result[i] = 1;
                break;
            }
            if (A[mid] <= b) low = mid + 1;
            else high = mid - 1;
        }
    });

    console.log(result.join("\n"));
    process.exit();
});
