const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const answer = [];

rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    const minHeap = new MinHeap();

    const [N, ...rest] = input;
    rest.forEach((value) => {
        if (!value) {
            answer.push(minHeap.pop() || 0);
        } else {
            minHeap.push(value);
        }
    });

    console.log(answer.join("\n"));
    process.exit();
});

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let curIndex = this.heap.length - 1;
        let parentIndex = this.#getParentIndex(curIndex);

        while (curIndex > 0 && this.heap[curIndex] < this.heap[parentIndex]) {
            this.#swap(curIndex, parentIndex);
            curIndex = parentIndex;
            parentIndex = this.#getParentIndex(curIndex);
        }
    }

    pop() {
        if (!this.getSize()) return null;
        if (this.getSize() === 1) return this.heap.pop();

        let curIndex = 0;
        this.#swap(curIndex, this.getSize() - 1);
        const result = this.heap.pop();

        let leftChildIndex, rightChildIndex, minIndex;
        while (this.#getLeftChildIndex(curIndex) < this.getSize()) {
            leftChildIndex = this.#getLeftChildIndex(curIndex);
            rightChildIndex = this.#getRightChildIndex(curIndex);
            minIndex = leftChildIndex;

            if (
                rightChildIndex < this.getSize() &&
                this.heap[rightChildIndex] < this.heap[leftChildIndex]
            ) {
                minIndex = rightChildIndex;
            }

            if (this.heap[curIndex] <= this.heap[minIndex]) break;

            this.#swap(curIndex, minIndex);
            curIndex = minIndex;
        }

        return result;
    }

    getSize() {
        return this.heap.length;
    }
    #getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    #getLeftChildIndex(index) {
        return index * 2 + 1;
    }
    #getRightChildIndex(index) {
        return index * 2 + 2;
    }
    #swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
}
