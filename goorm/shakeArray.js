// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const initialArray = [];

rl.on("line", function (line) {
    input.push(line.split(" ").map(Number));
}).on("close", function () {
    const [N, M] = input.shift();
    const arr = input.shift();
    const Swallow = new Solve(arr);

    for (let i = 0; i < M; i++) {
        const [cmd, x] = input[i];
        if (cmd === 0) {
            const el = Swallow.getElement(x);
            console.log(el);
        } else if (cmd === 1) {
            Swallow.moveLeft(x);
        } else if (cmd === 2) {
            Swallow.moveRight(x);
        } else if (cmd === 3) {
            Swallow.reset();
        }
    }
});

class Solve {
    #left = 0;

    constructor(arr) {
        this.arr = arr;
    }

    // 배열 초기화
    reset() {
        this.#left = 0;
    }

    getElement(idx) {
        const _idx = (this.#left + idx) % this.arr.length;
        return this.arr[_idx];
    }

    moveLeft(move) {
        const _move = move % this.arr.length;
        this.#left = (this.#left + _move) % this.arr.length;
    }

    moveRight(move) {
        const _move = move % this.arr.length;
        this.#left = (this.#left - _move + this.arr.length) % this.arr.length;
    }
}
