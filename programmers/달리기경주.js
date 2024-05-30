// const players = ["mumu", "soe", "poe", "kai", "mine"];
// const callings = ["kai", "kai", "mine", "mine"];
function solution(players, callings) {
    const status = new Map(players.map((p, i) => [p, i]));

    callings.forEach((overtaker) => {
        const overtakerIndex = status.get(overtaker);
        const overtakenIndex = overtakerIndex - 1;
        const overtaken = players[overtakenIndex];

        swap(players, overtakerIndex, overtakenIndex);

        status.set(overtaker, overtakenIndex);
        status.set(overtaken, overtakerIndex);
    });

    return players;
}

function swap(arr, from, to) {
    let temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
}

// solution(players, callings);
