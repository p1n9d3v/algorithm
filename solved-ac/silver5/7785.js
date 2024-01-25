const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const log = new Map();
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, ...arr] = input;
    const logs = arr.map((v) => v.split(" "));
    logs.forEach(([name, status]) => {
        log.set(name, status);
    });

    let result = [];
    log.forEach((v, k) => {
        if (v === "enter") result.push(k);
    });

    console.log(result.sort().reverse().join("\n"));
    process.exit();
});
