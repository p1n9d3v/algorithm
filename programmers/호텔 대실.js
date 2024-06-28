const CLEAN_TIME = 10;
const parseTime = ([start, end]) => [
    parseInt(start.split(":").join("")),
    parseInt(end.split(":").join("")),
];
function solution(book_time) {
    const rooms = [];
    book_time.sort((a, b) => {
        return parseTime(a)[0] - parseTime(b)[0];
    });

    rooms.push(parseTime(book_time.shift())[1]);
    for (let i = 0; i < book_time.length; i++) {
        const [start, end] = parseTime(book_time[i]);
        let isExist = false;
        for (let j = 0; j < rooms.length; j++) {
            let hour = Math.floor(rooms[j] / 100);
            let min = Math.floor((rooms[j] % 100) + CLEAN_TIME);
            if (min >= 60) {
                min -= 60;
                hour += 1;
            }
            hour *= 100;
            if (hour + min <= start) {
                rooms[j] = end;
                isExist = true;
                break;
            }
        }

        if (!isExist) {
            rooms.push(end);
        }

        rooms.sort((a, b) => a - b);
    }

    return rooms.length;
}
