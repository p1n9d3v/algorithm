const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const PN = [];
const output = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, M] = input.shift().split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        const pocketmon = input.shift();
        PN.push(pocketmon);
    }

    const NP = new Map(PN.map((name, index) => [name, index + 1]));

    input.forEach((p) => {
        if (!isNaN(Number(p))) {
            output.push(PN[Number(p) - 1]);
        } else {
            output.push(NP.get(p));
        }
    });

    console.log(output.join("\n"));
});
