function solution(name, yearning, photo) {
    var answer = [];
    // name: score 오브젝트 생성
    const score = name.reduce(
        (acc, cur, idx) => ({
            ...acc,
            [cur]: yearning[idx],
        }),
        {},
    );

    // photo를 순회하면서 그리움 점수 합 구하여 배열에 추가
    photo.forEach((row) => {
        const sum = row.reduce((acc, cur) => acc + (score[cur] ?? 0), 0);
        answer.push(sum);
    });

    return answer;
}

// console.log(
//     solution(
//         ["may", "kein", "kain", "radi"],
//         [5, 10, 1, 3],
//         [
//             ["may", "kein", "kain", "radi"],
//             ["may", "kein", "brin", "deny"],
//             ["kon", "kain", "may", "coni"],
//         ],
//     ),
// );
