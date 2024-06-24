function solution(s, skip, index) {
    const answer = [];
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha
        .map((x) => String.fromCharCode(x).toLowerCase())
        .filter((el) => {
            return !skip.includes(el);
        });

    s.split("").forEach((el) => {
        const fi = alphabet.findIndex((_el) => _el === el) + index;
        answer.push(alphabet[fi % alphabet.length]);
    });

    return answer.join("");
}
