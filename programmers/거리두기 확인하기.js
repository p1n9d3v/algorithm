function solution(places) {
    var answer = [];

    const problems = places.map((m) => m.map((_m) => _m.split("")));

    problems.forEach((prob, idx) => {
        const result = isSafe(prob);
        answer.push(Number(result));
    });

    return answer;
}

function isSafe(prob) {
    const X = [-1, 0, 1, 0];
    const Y = [0, -1, 0, 1];
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            if (prob[y][x] === "P") {
                for (let i = 0; i < 4; i++) {
                    const _nx = x + X[i];
                    const _ny = y + Y[i];

                    if (
                        _nx < 0 ||
                        _ny < 0 ||
                        _nx >= 5 ||
                        _ny >= 5 ||
                        prob[_ny][_nx] === "X"
                    )
                        continue;
                    if (prob[_ny][_nx] === "N" || prob[_ny][_nx] === "P")
                        return false;

                    prob[_ny][_nx] = "N";
                }
            }
        }
    }
    return true;
}
// 파티션(X)이 없다면 거리가 2 초과 차이나야함
// 사이에 파티션이 있다면 괜찮음
// P의 위치를 찾아냄
// P의 위치에서 'X', PY < problems.length , PX < problems[0].length , 거리가 2 초과가 되면 다른 길을 탐색
// 모든 P에 대해서 위의 조건을 만족하면서 P를 만나면 거리 두기 실패
