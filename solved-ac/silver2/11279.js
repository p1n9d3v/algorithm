const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*
 * 1. 최대 힙
 * 2. 부모의 값이 자식의 값보다 크거나 같아야 함
 */
const LENGTH = 100_000;
const input = [];
const answer = [];
rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    const [N, ...rest] = input;
    const heap = new MaxHeap();
    rest.forEach((value) => {
        if (!value) {
            const max = heap.remove();
            if (!max) answer.push(0);
            else answer.push(max);
        } else {
            heap.insert(value);
        }
    });

    console.log(answer.join("\n"));
    process.exit();
});

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // 힙에 새로운 요소를 추가하는 메소드
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // 힙에서 최댓값을 제거하고 반환하는 메소드
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    // 힙을 위로 정렬하는 메소드
    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            let parentIndex = this.getParentIndex(currentIndex);
            if (this.heap[currentIndex] <= this.heap[parentIndex]) break;
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
    }

    // 힙을 아래로 정렬하는 메소드
    heapifyDown(index) {
        let currentIndex = index;
        let leftChildIndex, rightChildIndex, largerChildIndex;

        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            leftChildIndex = this.getLeftChildIndex(currentIndex);
            rightChildIndex = this.getRightChildIndex(currentIndex);
            largerChildIndex = leftChildIndex;

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] > this.heap[leftChildIndex]
            ) {
                largerChildIndex = rightChildIndex;
            }

            if (this.heap[currentIndex] > this.heap[largerChildIndex]) break;
            this.swap(currentIndex, largerChildIndex);
            currentIndex = largerChildIndex;
        }
    }

    // 부모 인덱스를 찾는 메소드
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 왼쪽 자식 인덱스를 찾는 메소드
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    // 오른쪽 자식 인덱스를 찾는 메소드
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    // 두 요소의 위치를 교환하는 메소드
    swap(indexOne, indexTwo) {
        [this.heap[indexOne], this.heap[indexTwo]] = [
            this.heap[indexTwo],
            this.heap[indexOne],
        ];
    }

    // 힙이 비어있는지 확인하는 메소드
    isEmpty() {
        return this.heap.length === 0;
    }

    // 힙의 크기를 반환하는 메소드
    size() {
        return this.heap.length;
    }

    // 힙의 최댓값을 반환하는 메소드 (제거하지 않음)
    peek() {
        if (this.isEmpty()) return null;
        return this.heap[0];
    }
}
