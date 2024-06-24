function solution(maps) {
    var answer = 0;
    const board = maps.map((row) => row.split(""));
    let start = {
        x: 0,
        y: 0,
        count: 0,
    };

    for (let y in board) {
        for (let x in board[y]) {
            if (board[y][x] === "S") {
                start = {
                    x: Number(x),
                    y: Number(y),
                    count: 0,
                };
                break;
            }
        }
    }

    answer = bfs(board, start, "L");
    if (answer.count !== -1) {
        answer = bfs(board, answer, "E");
    }

    return answer.count;
}

// bfs

function bfs(board, start, target) {
    const X = [-1, 0, 1, 0];
    const Y = [0, -1, 0, 1];
    const visited = Array.from(Array(board.length), () =>
        new Array(board[0].length).fill(0),
    );
    const queue = [];

    queue.push(start);
    while (queue.length) {
        const { x, y, count } = queue.shift();
        for (let i = 0; i < X.length; i++) {
            const _x = x + X[i];
            const _y = y + Y[i];
            const _count = count + 1;

            // 유효성 검사
            if (
                0 <= _x &&
                0 <= _y &&
                _y < visited.length &&
                _x < visited[0].length &&
                board[_y][_x] !== "X" &&
                !visited[_y][_x]
            ) {
                const pos = {
                    x: _x,
                    y: _y,
                    count: _count,
                };
                if (board[_y][_x] === target) {
                    return pos;
                }
                visited[_y][_x] = 1;
                queue.push(pos);
            }
        }
    }

    return {
        x: -1,
        y: -1,
        count: -1,
    };
}
