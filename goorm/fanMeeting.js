const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class FrequencyTable {
    constructor() {
        this.length = 0;
        this.frequency = {};
    }

    add(value) {
        const count = this.frequency[value] || 0;

        if (count === 0) {
            this.frequency[value] = 1;
            this.length++;
        } else {
            this.frequency[value] = count + 1;
        }
    }

    remove(value) {
        const count = this.frequency[value];

        if (count === 1) {
            delete this.frequency[value];
            this.length--;
        } else {
            this.frequency[value] = count - 1;
        }
    }
}

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, K] = input.shift().split(" ").map(Number);
    const births = input.shift().split(" ").map(Number);
    let answer = 0;
    const table = new FrequencyTable();

    for (let i = 0; i < K; i++) {
        table.add(births[i]);
    }

    if (table.length === K) answer++;

    for (let i = 1; i <= N - K; i++) {
        table.remove(births[i - 1]);
        table.add(births[i + K - 1]);

        if (table.length === K) answer++;
    }

    console.log(answer);
    process.exit();
});
