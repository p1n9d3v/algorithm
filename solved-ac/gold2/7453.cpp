// javascript는 map, binarysearch 했지만 시간초과가 남 , c++ 로 해결
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
typedef long long int ll;

vector<ll> A_B, A, B, C, D;
int main(){
    int N;
    cin >> N;
    for(int i=0; i<N; ++i){
        ll a, b, c, d;
        cin >> a >> b >> c >> d;
        A.push_back(a);
        B.push_back(b);
        C.push_back(c);
        D.push_back(d);
    }
    for(int i=0; i<N; ++i)
        for(int j=0; j<N; ++j)
            A_B.push_back(A[i]+B[j]);
    ll cnt=0, k=0;
    sort(A_B.begin(), A_B.end());
    for(int i=0; i<N; ++i){
        for(int j=0; j<N; ++j){
            k=(upper_bound(A_B.begin(), A_B.end(), -(C[i]+D[j])) - lower_bound(A_B.begin(), A_B.end(), -(C[i]+D[j])));
            if(k) cnt+=k;
        }
    }
    cout << cnt << '\n';
}


// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// const A_B = [];
// const A = [];
// const B = [];
// const C = [];
// const D = [];
// const input = [];
// rl.on("line", function (line) {
//     input.push(line.split(" ").map(Number));
// }).on("close", function () {
//     const N = input.shift();
//     const map = new Map();
//     input.forEach((el) => {
//         const [a, b, c, d] = el;
//         A.push(a);
//         B.push(b);
//         C.push(c);
//         D.push(d);
//     });
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < N; j++) {
//             map.set(-(A[i] + B[j]), 0);
//         }
//     }
//
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < N; j++) {
//             const value = map.get(C[i] + D[j]);
//             if (value !== undefined) {
//                 map.set(C[i] + D[j], value + 1);
//             }
//         }
//     }
//
//     const count = Array.from(map.values()).reduce((acc, cur) => acc + cur, 0);
//     process.stdout.write(`${count}\n`);
//     process.exit();
// });
//
// function binarySearch(arr, start, end, target) {
//     if (start > end) return -1;
//     const mid = Math.floor((start + end) / 2);
//
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] > target)
//         return binarySearch(arr, start, mid - 1, target);
//     else return binarySearch(arr, mid + 1, end, target);
// }
// function upperBound(arr, start, end, target) {
//     if (start > end) return end;
//     const mid = Math.floor((start + end) / 2);
//
//     if (arr[mid] <= target) return upperBound(arr, mid + 1, end, target);
//     else return upperBound(arr, start, mid - 1, target);
// }
//
// function lowerBound(arr, start, end, target) {
//     if (start > end) return start;
//     const mid = Math.floor((start + end) / 2);
//
//     if (arr[mid] < target) return lowerBound(arr, mid + 1, end, target);
//     else return lowerBound(arr, start, mid - 1, target);
// }
