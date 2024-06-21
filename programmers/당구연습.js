function solution(m, n, startX, startY, balls) {
    var answer = [];
    const Bill = new Billiards(m, n, startX, startY);

    balls.forEach(([targetX, targetY], idx) => {
        const result = Bill.getMin(targetX, targetY);
        answer.push(result);
    });

    return answer;
}

class Billiards {
    constructor(m, n, startX, startY) {
        this.m = m;
        this.n = n;
        this.x = startX;
        this.y = startY;
    }

    getMin(targetX, targetY) {
        const top = this.getDistanceOnTop(targetX, targetY);
        const right = this.getDistanceOnRight(targetX, targetY);
        const bottom = this.getDistanceOnBottom(targetX, targetY);
        const left = this.getDistanceOnLeft(targetX, targetY);

        if (this.y === targetY && targetX < this.x) {
            return Math.min(top, right, bottom);
        } else if (this.y === targetY && targetX > this.x) {
            return Math.min(top, left, bottom);
        } else if (this.x === targetX && targetY < this.y) {
            return Math.min(top, right, left);
        } else if (this.x === targetX && targetY > this.y) {
            return Math.min(right, left, bottom);
        } else {
            return Math.min(top, left, right, bottom);
        }
    }

    getDistanceOnTop(targetX, targetY) {
        return (
            Math.pow(this.x - targetX, 2) +
            Math.pow(2 * this.n - this.y - targetY, 2)
        );
    }

    getDistanceOnRight(targetX, targetY) {
        return (
            Math.pow(2 * this.m - this.x - targetX, 2) +
            Math.pow(this.y - targetY, 2)
        );
    }

    getDistanceOnBottom(targetX, targetY) {
        return Math.pow(this.x - targetX, 2) + Math.pow(this.y + targetY, 2);
    }

    getDistanceOnLeft(targetX, targetY) {
        return Math.pow(this.x + targetX, 2) + Math.pow(this.y - targetY, 2);
    }
}
