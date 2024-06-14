// n : users
// m : emoti
// discount : [10%,20%,30%,40%]

function getPrice(price, discount) {
    return price - Math.floor((price * discount) / 100);
}

function solution(users, emoticons) {
    let answer = [0, 0];
    let discount = [];
    // 각 케이스별 계산
    const calc = () => {
        let total = [0, 0];

        users.map((user) => {
            const [ratio, maxPrice] = user;
            let totalPrice = 0;
            emoticons.map((emoticon, index) => {
                if (discount[index] >= ratio) {
                    totalPrice += getPrice(emoticon, discount[index]);
                }
            });

            if (totalPrice >= maxPrice) {
                totalPrice = 0;
                ++total[0];
            }
            total[1] += totalPrice;
        });

        if (
            answer[0] < total[0] ||
            (answer[0] === total[0] && answer[1] < total[1])
        ) {
            answer = [...total];
        }
    };

    // discount의 모든 케이스 순회
    const DFS = (count) => {
        if (count === emoticons.length) {
            console.log(discount);
            calc();
            return;
        }

        for (let i = 40; i >= 10; i -= 10) {
            discount[count] = i;
            DFS(count + 1);
        }
    };

    DFS(0);

    return answer;
}
