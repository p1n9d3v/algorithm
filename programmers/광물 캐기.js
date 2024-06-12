function solution(picks, minerals) {
    var answer = 0;

    let subsMinerals = [];
    let picksSum = picks.reduce((acc, cur) => acc + cur, 0);

    while (minerals.length) {
        const slicedMinerals = minerals.slice(0, 5);
        subsMinerals.push({
            arr: slicedMinerals,
            sum: slicedMinerals.reduce((acc, cur) => {
                if (cur === "diamond") return acc + 31;
                else if (cur === "iron") return acc + 7;
                return acc + 3;
            }, 0),
        });
        minerals = minerals.slice(5);
    }

    const diff = subsMinerals.length - picksSum;
    if (diff > 0) {
        subsMinerals = subsMinerals.slice(0, subsMinerals.length - diff);
    }
    subsMinerals.sort((a, b) => b.sum - a.sum);

    while (picksSum > 0 && subsMinerals.length > 0) {
        const subs = subsMinerals.shift();
        console.log(subs);

        const d =
            picks[0] > 0
                ? calculateFatigue.call(DiamondGrain, subs.arr)
                : Number.MAX_SAFE_INTEGER;
        const i =
            picks[1] > 0
                ? calculateFatigue.call(IronGrain, subs.arr)
                : Number.MAX_SAFE_INTEGER;
        const s =
            picks[2] > 0
                ? calculateFatigue.call(StoneGrain, subs.arr)
                : Number.MAX_SAFE_INTEGER;

        const min = [
            {
                value: d,
                priority: 0,
            },
            {
                value: i,
                priority: 1,
            },
            {
                value: s,
                priority: 2,
            },
        ]
            .sort((a, b) => {
                const v = a.value - b.value;
                if (!v) {
                    return b.priority - a.priority;
                }
                return v;
            })
            .shift();

        picks[min.priority]--;
        picksSum--;
        answer += min.value;
    }

    return answer;
}

const DiamondGrain = {
    diamond: 1,
    iron: 1,
    stone: 1,
};

const IronGrain = {
    diamond: 5,
    iron: 1,
    stone: 1,
};

const StoneGrain = {
    diamond: 25,
    iron: 5,
    stone: 1,
};

function calculateFatigue(minerals) {
    const count = [0, 0, 0];
    for (let i = 0; i < minerals.length; i++) {
        if (minerals[i] === "diamond") count[0]++;
        else if (minerals[i] === "iron") count[1]++;
        else count[2]++;
    }
    return (
        this.diamond * count[0] + this.iron * count[1] + this.stone * count[2]
    );
}
