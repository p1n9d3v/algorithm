const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
});

rl.on("close", () => {
    input.shift();
    input.forEach(([n, ...arr]) => {
        let sum = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                const result = gcd(arr[i], arr[j]);
                sum += result;
            }
        }
        console.log(sum);
    });
});

function gcd(a, b) {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}

// 4 10 20 30 40
// 3 7 5 12
// 3 125 15 25
//
// 3 125 15 25
// 3 15 -> 3
// 15 25 -> 5
// 15 125 -> 5
// 25 125 -> 25
//
// 7 5 12
// 1 1 1 -> 3
//
// 10 20 30 40
// 10 20 -> 10
// 20 30 -> 10
// 20 30 -> 10
// 30 40 -> 10
// 20 40 -> 20
// 10 40 -> 10
//
// t:=100
// n:=100 -> O(n^2)

// gcd (a,b) = gcd(b, a%b)
// 1도 포함
