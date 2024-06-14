const OBS = "D";
const TARGET = "G";
const ROBOT = "R";
const POSIBLE = ".";

const X = [-1, 0, 1, 0];
const Y = [0, -1, 0, 1];
function solution(board) {
    var answer = 0;
    const queue = [];
    const visited = [];
    const map = board.map((cell) => cell.split(""));
    const weightMap = Array.from(Array(map.length), () =>
        Array(map[0].length).fill(Number.MAX_SAFE_INTEGER),
    );

    const robotPos = {
        x: 0,
        y: 0,
        c: 0,
    };

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] === ROBOT) {
                robotPos.x = j;
                robotPos.y = i;
            }
        }
    }

    queue.push(robotPos);
    weightMap[robotPos.y][robotPos.x] = -1;

    while (queue.length > 0) {
        const { x, y, c } = queue.shift();

        // 해당 위치가 로봇이면 반환
        if (map[y][x] === TARGET) {
            return c;
        }

        // 4 방향 탐색
        for (let i = 0; i < X.length; i++) {
            const nextPos = {
                x: x,
                y: y,
            };

            // D나 밖이 아닐경우 동일한 방향으로 이동
            while (
                isInner(
                    {
                        x: nextPos.x + X[i],
                        y: nextPos.y + Y[i],
                    },
                    map,
                ) &&
                map[nextPos.y + Y[i]][nextPos.x + X[i]] !== OBS
            ) {
                nextPos.x += X[i];
                nextPos.y += Y[i];
            }

            if (weightMap[nextPos.y][nextPos.x] > c + 1) {
                weightMap[nextPos.y][nextPos.x] = c + 1;
                queue.push({
                    x: nextPos.x,
                    y: nextPos.y,
                    c: c + 1,
                });
            }
        }
    }

    return -1;
}

function isInner(pos, arr) {
    return (
        0 <= pos.x && 0 <= pos.y && pos.y < arr.length && pos.x < arr[0].length
    );
}
