function solution(cards) {
    var answer = 0;
    let visited = Array(cards.length).fill(false);

    const dfs = (cNum) => {
        if (visited[cNum - 1])
            return {
                value: 0,
                sum: 0,
            };
        visited[cNum - 1] = true;
        const { value, sum } = dfs(cards[cNum - 1]);
        return {
            sum: sum + cNum,
            value: 1 + value,
        };
    };

    const group = [];
    const sums = [];
    for (let j = 1; j <= cards.length; j++) {
        const { sum, value } = dfs(j);
        if (!sums.includes(sum)) {
            sums.push(sum);
            group.push(value);
        }
        visited = Array(cards.length).fill(false);
    }

    group.sort((a, b) => b - a);

    return sums.length > 1 ? group[0] * group[1] : 0;
}
