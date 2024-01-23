const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const output = [];

rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    const heap = new AbsMinHeap();
    const [N, ...arr] = input;
    arr.forEach((value) => {
        if (!value) {
            const result = heap.pop();
            if (!result) output.push(0);
            else output.push(result);
        } else {
            heap.push(value);
        }
    });

    console.log(output.join("\n"));
    process.exit();
});

class AbsMinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let cIdx = this.heap.length - 1;
        while (this.#getParentIdx(cIdx) >= 0) {
            const pIdx = this.#getParentIdx(cIdx);
            const parentValue = this.#getValue(pIdx);
            const curValue = this.#getValue(cIdx);
            if (parentValue > curValue) {
                this.#swap(pIdx, cIdx);
            } else if (parentValue === curValue) {
                if (this.heap[pIdx] > this.heap[cIdx]) {
                    this.#swap(pIdx, cIdx);
                }
            }
            cIdx = pIdx;
        }
    }

    pop() {
        if (!this.heap.length) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let result = this.heap[0];
        this.#swap(0, this.heap.length - 1);
        this.heap.pop();
        let cIdx = 0;

        while (this.#getLeftChildIdx(cIdx) < this.heap.length) {
            let leftChildIdx = this.#getLeftChildIdx(cIdx);
            let rightChildIdx = this.#getRightChildIdx(cIdx);
            let minIdx = leftChildIdx;

            if (rightChildIdx < this.heap.length) {
                if (
                    this.#getValue(leftChildIdx) > this.#getValue(rightChildIdx)
                ) {
                    minIdx = rightChildIdx;
                } else if (
                    this.#getValue(leftChildIdx) ===
                    this.#getValue(rightChildIdx)
                ) {
                    if (this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
                        minIdx = rightChildIdx;
                    }
                }
            }
            if (this.#getValue(minIdx) < this.#getValue(cIdx)) {
                this.#swap(minIdx, cIdx);
            }

            cIdx = minIdx;
        }

        return result;
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

    #getValue(idx) {
        return Math.abs(this.heap[idx]);
    }
}
