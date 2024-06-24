function solution(cards1, cards2, goal) {
    var answer = "";

    let cid1 = 0;
    let cid2 = 0;
    for (let word of goal) {
        if (cards1[cid1] === word) {
            cid1++;
        } else if (cards2[cid2] === word) {
            cid2++;
        } else {
            return "No";
        }
    }

    return "Yes";
}
