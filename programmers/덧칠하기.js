function solution(n, m, section) {
    var answer = 0;
    const mem = new Array(n).fill(1);
    section.forEach((el) => {
        mem[el - 1] = 0;
    });

    for (let i = section[0] - 1; i < n; i++) {
        if (mem[i]) {
            continue;
        }

        for (let j = i; j < n && j < i + m; j++) {
            mem[j] = 1;
        }
        answer += 1;
    }

    return answer;
}

function solution(n, m, section) {
    var answer = 0;
    let prev = section[0];
    for (const i of section.map(Number)) {
        if (i < prev) continue;
        prev = i + m;
        answer++;
    }

    return answer;
}
