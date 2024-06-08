function solution(r1, r2) {
    var answer = 0;
    let side = 0;
    for (let x = 0; x <= r2; x++) {
        answer += getDistance(r2, x);
    }

    for (let x = 0; x <= r1; x++) {
        answer -= getDistance(r1, x);

        if (Math.sqrt(Math.pow(r1, 2) - Math.pow(x, 2)) % 1 === 0) {
            side++;
        }
    }

    answer *= 4;
    answer += side * 4 - 4;
    return answer;
}

function getDistance(r, x) {
    return parseInt(Math.sqrt(Math.pow(r, 2) - Math.pow(x, 2)));
}
