function solution(maps) {
    var answer = [];
    const visited = Array.from(Array(maps.length), () =>
        Array(maps[0].length).fill(0),
    );
    const X = [-1, 0, 1, 0];
    const Y = [0, -1, 0, 1];
    const search = (y, x) => {
        if (
            x < 0 ||
            x >= visited[0].length ||
            y < 0 ||
            y >= visited.length ||
            visited[y][x] ||
            maps[y].at(x) === "X"
        )
            return 0;

        visited[y][x] = 1;
        let k = parseInt(maps[y].at(x));
        for (let i = 0; i < X.length; i++) {
            k += search(y + Y[i], x + X[i]);
        }

        return k;
    };

    maps.forEach((row, y) => {
        for (let x = 0; x < row.length; x++) {
            if (row[x] !== "X") {
                const k = search(y, x);
                if (k !== 0) answer.push(k);
            }
        }
    });

    if (answer.length === 0) return [-1];
    return answer.sort((a, b) => a - b);
}
