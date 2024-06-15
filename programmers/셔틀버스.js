function solution(n, t, m, timetable) {
    var answer = "";
    const timetableToMin = timetable
        .map((t) => timeToMin(t))
        .sort((a, b) => a - b);

    const start = timeToMin("09:00");
    const end = timeToMin("23:59");
    let people = [];
    let startAt = start;
    for (let i = 0; i < n; i++) {
        people = [];
        startAt = start + i * t;
        while (people.length < m && timetableToMin.length > 0) {
            if (timetableToMin[0] > startAt) break;
            const t = timetableToMin.shift();
            people.push(t);
        }
    }

    // 버스가 꽉차있다면 마지막 사람보다 먼저
    if (people.length === m) {
        answer = people.pop() - 1;
    }
    // 버스가 다차지 않았다면 버스 오는 시간에
    else if (people.length < m) {
        answer = startAt;
    }

    return minToTime(answer);
}

function timeToMin(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
}

function minToTime(min) {
    const h = Math.floor(min / 60);
    const m = Math.floor(min % 60);

    return h.toString().padStart(2, "0") + ":" + m.toString().padStart(2, "0");
}
