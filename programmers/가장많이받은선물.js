function solution(friends, gifts) {
    let answer = 0;
    const people = new Map(friends.map((name) => [name, new Person(name)]));
    const nextMonthGifts = new Map(friends.map((name) => [name, 0]));

    gifts.forEach((record) => {
        const [giver, receiver] = record.split(" ");

        const giverPerson = people.get(giver);
        const receiverPerson = people.get(receiver);

        giverPerson.recordSentGifts(receiver);
        receiverPerson.recordReceivedGifts(giver);
    });

    for (let i = 0; i < friends.length - 1; i++) {
        const f1 = friends[i];
        for (let j = i + 1; j < friends.length; j++) {
            const f2 = friends[j];
            const f1ToF2 = people.get(f1).sentGifts.get(f2) ?? 0;
            const f2ToF1 = people.get(f1).receivedGifts.get(f2) ?? 0;

            if (f1ToF2 - f2ToF1 === 0) {
                if (
                    people.get(f1).getGiftRate() > people.get(f2).getGiftRate()
                ) {
                    nextMonthGifts.set(f1, nextMonthGifts.get(f1) + 1);
                } else if (
                    people.get(f1).getGiftRate() < people.get(f2).getGiftRate()
                ) {
                    nextMonthGifts.set(f2, nextMonthGifts.get(f2) + 1);
                }
                continue;
            }

            if (f1ToF2 > f2ToF1) {
                nextMonthGifts.set(f1, nextMonthGifts.get(f1) + 1);
            } else if (f1ToF2 < f2ToF1) {
                nextMonthGifts.set(f2, nextMonthGifts.get(f2) + 1);
            }
        }
    }

    for (const [_, count] of nextMonthGifts) {
        if (answer < count) {
            answer = count;
        }
    }

    return answer;
}

class Person {
    sentGifts = new Map();
    receivedGifts = new Map();
    constructor(name) {
        this.name = name;
    }

    recordSentGifts(receiver) {
        const preCount = this.sentGifts.get(receiver) ?? 0;
        this.sentGifts.set(receiver, preCount + 1);
    }

    recordReceivedGifts(giver) {
        const preCount = this.receivedGifts.get(giver) ?? 0;
        this.receivedGifts.set(giver, preCount + 1);
    }

    getGiftRate() {
        const sentGiftCounts = Array.from(this.sentGifts.values()).reduce(
            (acc, cur) => acc + cur,
            0,
        );

        const receivedGiftCounts = Array.from(
            this.receivedGifts.values(),
        ).reduce((acc, cur) => acc + cur, 0);

        return sentGiftCounts - receivedGiftCounts;
    }
}
