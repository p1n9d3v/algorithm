const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const answer = new Set();
rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    input.shift();
    const cards = input.shift();
    const targets = input.shift();
    const cardPairs = new Pairs(cards);

    targets.forEach((target) => {
        cardPairs.forEach((cp) => {
            const r = target - cp;
            if (r < 0) return;
            if (cardPairs.has(r)) answer.add(target);
        });
    });

    console.log(
        answer.size ? [...answer].sort((a, b) => a - b).join(" ") : "NO",
    );
});

class Pairs {
    #pairs = new Set();
    constructor(cards) {
        cards.sort((a, b) => a - b);
        cards.forEach((card1) => {
            cards.forEach((card2) => {
                this.#pairs.add(card1 + card2);
            });
        });
    }

    has(target) {
        return this.#pairs.has(target);
    }

    forEach(callback) {
        this.#pairs.forEach(callback);
    }
}
