function solution(keymap, targets) {
    var answer = [];

    targets.forEach((str, i) => {
        const splittedStr = str.split("");
        answer[i] = 0;
        for (let key of str) {
            const count = findKeyCount(keymap, key);
            if (count === -1) {
                answer[i] = -1;
                break;
            }

            answer[i] += count;
        }
    });

    return answer;
}

function findKeyCount(keymap, key) {
    const len = Math.max(...keymap.map((el) => el.length));
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < keymap.length; j++) {
            if (keymap[j].at(i) === key) {
                return i + 1;
            }
        }
    }

    return -1;
}
