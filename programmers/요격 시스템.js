function solution(targets) {
    var answer = 0;

    targets.sort((a, b) => a[0] - b[0]);

    while (targets.length > 0) {
        const [start, end] = targets.pop();
        answer++;
        while (targets.length > 0 && start < targets[targets.length - 1][1])
            targets.pop();
    }
    // console.log(answer);
    return answer;
}

// solution([ [4, 5],
//     [4, 8],
//     [4, 14],
// ]);
