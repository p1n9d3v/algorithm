function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let memorizedSum = sequence[start];
    let result = [];
    while (end < sequence.length) {
        if (memorizedSum >= k) {
            if (memorizedSum === k) {
                if (!result.length) result = [start, end];
                else {
                    const diff1 = result[1] - result[0] + 1;
                    const diff2 = end - start + 1;
                    if (diff1 > diff2) result = [start, end];
                }
            }

            memorizedSum -= sequence[start];
            start++;
        } else {
            end++;
            memorizedSum += sequence[end];
        }
    }

    return [result[0], result[1]];
}
