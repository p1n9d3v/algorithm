const input = ["..", "#."]; // start.y는 가장 첫번째 행
// start.x는 가장 첫번째 열 -> minX보다 작은 값을 찾으면 됨
function solution(wallpaper) {
    var answer = [];
    const start = {
        y: 50,
        x: 50,
    };
    const end = {
        y: 0,
        x: 0,
    };
    const files = [];
    const papers = wallpaper.map((p) => p.split(""));
    papers.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === "#") {
                files.push([y, x]);
                if (start.x > x) start.x = x;
                if (start.y > y) start.y = y;
                if (end.x < x + 1) end.x = x + 1;
                if (end.y < y + 1) end.y = y + 1;
            }
        });
    });

    return [start.y, start.x, end.y, end.x];
}

solution(input);
