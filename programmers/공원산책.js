function solution(park, routes) {
    const play = new Play(park);

    routes.forEach((route) => {
        const [direction, count] = route.split(" ");
        play.move(direction, count);
    });

    return [play.position.y, play.position.x];
}

class Play {
    hurdles = [];
    direction = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };
    constructor(park) {
        this.park = park.map((cell) => cell.split(""));

        this.park.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell === "S") {
                    this.position = { x, y };
                    this.prevPosition = { x, y };
                }
                if (cell === "X") {
                    this.hurdles.push({ x, y });
                }
            });
        });
    }

    loop(count, callback) {
        for (let i = 0; i < count; i++) {
            callback.call(this);
            if (this.#isHurdle() || !this.#isInPark()) {
                this.position = {
                    ...this.prevPosition,
                };
                return;
            }
        }

        this.prevPosition = {
            ...this.position,
        };
    }

    move(direction, count) {
        this.loop(count, () => {
            this.position.x += this.direction[direction][1];
            this.position.y += this.direction[direction][0];
        });
    }

    #isHurdle() {
        return this.hurdles.some(
            (hurdle) =>
                hurdle.x === this.position.x && hurdle.y === this.position.y,
        );
    }

    #isInPark() {
        return (
            this.position.y >= 0 &&
            this.position.y < this.park.length &&
            this.position.x >= 0 &&
            this.position.x < this.park[0].length
        );
    }
}
solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]);
