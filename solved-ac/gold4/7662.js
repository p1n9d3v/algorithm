const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const answer = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [T, ...cases] = input;

    for (let i = 0; i < T; i++) {
        const maxQueue = new Heap((a, b) => Number(a) > Number(b));
        const minQueue = new Heap((a, b) => Number(a) < Number(b));
        let N = cases.shift();
        const testcases = cases.slice(0, N);
        const valid = {};
        cases.splice(0, N);

        for (let i = 0; i < testcases.length; i++) {
            const [P, D] = testcases[i].split(" ");
            if (P === "I") {
                maxQueue.push(D);
                minQueue.push(D);
                if (valid[D]) valid[D]++;
                else valid[D] = 1;
            } else {
                if (D === "1") {
                    while (!maxQueue.isEmpty()) {
                        const item = maxQueue.pop();
                        if (valid[item] > 0) {
                            valid[item]--;
                            break;
                        }
                    }
                } else {
                    while (!minQueue.isEmpty()) {
                        const item = minQueue.pop();
                        if (valid[item] > 0) {
                            valid[item]--;
                            break;
                        }
                    }
                }
            }
        }
        while (!maxQueue.isEmpty() && valid[maxQueue.peek()] === 0)
            maxQueue.pop();
        while (!minQueue.isEmpty() && valid[minQueue.peek()] === 0)
            minQueue.pop();

        if (minQueue.isEmpty() && maxQueue.isEmpty()) {
            answer.push("EMPTY");
        } else {
            answer.push(`${maxQueue.peek()} ${minQueue.peek()}`);
        }
    }

    console.log(answer.join("\n"));
});

class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    push(value) {
        this.heap.push(value);
        //heapify
        let curIdx = this.heap.length - 1;
        while (1) {
            let parentIdx = this.#getParentIdx(curIdx);
            if (parentIdx < 0) break;

            const isSwap = this.compare(
                this.heap[curIdx],
                this.heap[parentIdx],
            );

            if (isSwap) {
                this.#swap(curIdx, parentIdx);
                curIdx = parentIdx;
            } else {
                break;
            }
        }
    }
    pop() {
        //heapify
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.#swap(0, this.heap.length - 1);
        let result = this.heap.pop();
        let curIdx = 0;
        while (this.#getLeftChildIdx(curIdx) < this.heap.length) {
            let leftIdx = this.#getLeftChildIdx(curIdx);
            let rightIdx = this.#getRightChildIdx(curIdx);
            let targetIdx = leftIdx;
            if (
                rightIdx < this.heap.length &&
                this.compare(this.heap[rightIdx], this.heap[leftIdx])
            ) {
                targetIdx = rightIdx;
            }

            if (this.compare(this.heap[targetIdx], this.heap[curIdx])) {
                this.#swap(targetIdx, curIdx);
                curIdx = targetIdx;
            } else {
                break;
            }
        }

        return result;
    }
    peek() {
        return this.heap[0];
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    #getParentIdx(idx) {
        return Math.floor((idx - 1) / 2);
    }

    #getLeftChildIdx(idx) {
        return idx * 2 + 1;
    }
    #getRightChildIdx(idx) {
        return idx * 2 + 2;
    }
    #swap(idx1, idx2) {
        const temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }
}
