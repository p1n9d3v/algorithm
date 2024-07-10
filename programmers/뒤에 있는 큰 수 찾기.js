function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    const stack = [];

    stack.push({ idx: 0, value: numbers[0] });
    for (let i = 1; i < numbers.length; i++) {
        let lastIndex = stack.length - 1;
        while (stack.length && stack[lastIndex].value < numbers[i]) {
            const s = stack.pop();
            answer[s.idx] = numbers[i];
            lastIndex--;
        }

        stack.push({ idx: i, value: numbers[i] });
    }

    return answer;
}
