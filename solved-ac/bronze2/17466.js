const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input;
rl.on("line", (line) => {
    input = line.split(" ").map(BigInt);
}).on("close", () => {
    const [N, P] = input;
    let pact = 1n;
    for (let i = 1n; i <= N; i++) {
        const mod = i % P;
        if (mod === BigInt(0)) {
            console.log(0);
            process.exit();
        }
        pact = (pact * mod) % P;
    }

    console.log(pact.toString());
    process.exit();
});

/* CPP */
// #include <iostream>
// using namespace std;
// int main(){
//     ios_base::sync_with_stdio(false); cin.tie(NULL);
//
//     int N, P; cin >> N >> P;
//     int res = 1;
//     for(int i=1; i<=N; ++i){
//         res = (res * (long long)i) % P;
//
//
//     }
//     cout << res << '\n';
// }
