// 도넛 모양 D = n , V = n
// 막대 모양 D = n , V = n -1
// 8자 모양 D = 2n + 1, V = 2n + 2
function solution(edges) {
    const answer = [0, 0, 0, 0];
    const graph = {};

    edges.forEach(([from, to]) => {
        graph[from] ||= { send: 0, receive: 0 };
        graph[to] ||= { send: 0, receive: 0 };

        graph[from].send++;
        graph[to].receive++;
    });

    let totalGraph = 0;
    for (let v in graph) {
        const { send, receive } = graph[v];
        if (send >= 2 && receive === 0) {
            answer[0] = parseInt(v);
            totalGraph = send;
        }

        if (send === 0) answer[2]++;
        if (send >= 2 && receive !== 0) answer[3]++;
    }

    answer[1] = totalGraph - answer[2] - answer[3];
    return answer;
}

//
// const input = [
//     [4, 11],
//     [1, 12],
//     [8, 3],
//     [12, 7],
//     [7, 11],
//     [4, 8],
//     [9, 6],
//     [10, 11],
//     [6, 10],
//     [3, 5],
//     [11, 1],
//     [5, 3],
//     [11, 9],
//     [3, 8],
// ];
// //
// solution(input);
