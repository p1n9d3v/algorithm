function solution(plans) {
    var answer = [];

    const P = new Plan(plans);
    P.play();

    answer = P.finished.map((t) => t.name);
    return answer;
}

class Plan {
    constructor(plans) {
        this.plans = plans
            .map((p) => new Task(p))
            .sort((a, b) => a.start - b.start);
        this.notFinished = [];
        this.finished = [];
    }

    play() {
        let currentTask = this.plans.shift();
        while (currentTask) {
            console.log(
                currentTask,
                this.plans,
                this.notFinished,
                this.finished,
            );
            if (!this.plans.length) {
                this.finished.push(currentTask);
                break;
            }
            const check = this.#check(currentTask);

            if (check === 0) {
                this.finished.push(currentTask);
                currentTask = this.plans.shift();
            } else if (check > 0) {
                this.finished.push(currentTask);
                const prevTask = currentTask;
                if (this.notFinished.length) {
                    currentTask = this.notFinished.pop();
                    currentTask.start = prevTask.end;
                } else {
                    currentTask = this.plans.shift();
                }
            } else {
                currentTask.playtime = Math.abs(check);
                this.notFinished.push(currentTask);
                currentTask = this.plans.shift();
            }
        }

        this.notFinished.reverse().forEach((t) => this.finished.push(t));
    }

    // + : 시간 여유가 있음
    // - : 과제를 다 못함
    // 0 : 과제를 다함
    #check(current) {
        const next = this.plans[0];
        return next.start - current.end;
    }
}

class Task {
    constructor(task) {
        const [name, start, playtime] = task;
        this.name = name;
        this.start = start.split(":").map((s) => parseInt(s));
        this.start = this.start[0] * 60 + this.start[1];
        this.playtime = parseInt(playtime);
    }

    get end() {
        return this.start + this.playtime;
    }
}

solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
]);
