const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    input.forEach(([n, m]) => {
        // n! 순회
        // m을 소인수 분해
        // m의 소인수로 n[i]를 나누어 소인수 개수를 구함
        // m의 소인수와 n[i]의 소인수를 비교 후 최소값을 구함
        // 개수만큼 result에 곱함
        let result = 1;
        mFactArr = factorization(m);
        mFactArr.forEach(({ prime, cnt }) => {
            let pp = prime;
            let mCnt = 0;
            while (n >= pp) {
                mCnt += Math.floor(n / pp);
                pp *= prime;
            }

            result *= Math.pow(prime, Math.min(mCnt, cnt));
        });
        console.log(result);
        // console.log(result);
    });
});

function factorization(num) {
    let P = num;
    const result = [];
    for (let i = 2; i * i <= P; i++) {
        let cnt = 0;
        while (P % i === 0) {
            P /= i;
            cnt++;
        }
        if (cnt !== 0) result.push({ prime: i, cnt });
    }

    if (P > 1) {
        result.push({ prime: P, cnt: 1 });
    }
    return result;
}
