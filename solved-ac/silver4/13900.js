const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const numbers = input[1].split(" ").map(Number);
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    const result = solution(sum, numbers);
    console.log(`${result}\n`);
    process.exit();
});

function solution(sum, numbers) {
    let tmpSum = sum;
    let total = 0;
    numbers.forEach((n) => {
        tmpSum -= n;
        total += n * tmpSum;
    });

    return total;
}

// node js는 통과가 되지 않음....
/* C++ */
// #include <iostream>
// #include <vector>
// #include <numeric>  // std::accumulate를 사용하기 위한 헤더
//
// using namespace std;
//
// long long solution(const vector<int>& numbers) {
//     long long total = 0;
//     long long sumSoFar = 0;
//     long long sumOfAll = accumulate(numbers.begin(), numbers.end(), 0LL);
//
//     for (int number : numbers) {
//         sumSoFar += number;
//         total += number * (sumOfAll - sumSoFar);
//     }
//
//     return total;
// }
//
// int main() {
//     int N;
//     cin >> N;
//
//     vector<int> numbers(N);
//     for (int i = 0; i < N; i++) {
//         cin >> numbers[i];
//     }
//
//     cout << solution(numbers) << endl;
//
//     return 0;
// }
