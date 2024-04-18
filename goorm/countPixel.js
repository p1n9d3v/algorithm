const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    const [N, ...arr] = input;
    arr.forEach((r, idx) => {
        let h = r - 1;
        let count = 0;
        for (let x = 0; x < r; x++) {
            for (let y = h; y >= 0; y--) {
                if (isInside(x, y, r)) {
                    count += y + 1;
                    h = y;
                    break;
                }
            }
        }
        console.log(`#${idx + 1}`);
        console.log(count * 4);
    });
});

function isInside(x, y, r) {
    return x * x + y * y < r * r;
}
