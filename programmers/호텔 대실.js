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

"objects": [
    {
      "name": "cluster_0",
      "_draw_": 
      [
        {
          "op": "S",
          "style": "tab"
        },
        {
          "op": "c",
          "grad": "none",
          "color": "#0000ff"
        },
        {
          "op": "p",
          "points": [[8.000,133.600],[8.000,336.000],[322.000,336.000],[322.000,133.600]]
        }
      ],
      "_ldraw_": 
      [
        {
          "op": "F",
          "size": 14.000,
          "face": "Times-Roman"
        },
        {
          "op": "c",
          "grad": "none",
          "color": "#000000"
        },
        {
          "op": "T",
          "pt": [165.000,319.400],
          "align": "c",
          "width": 92.120,
          "text": "Service Package"
        }
      ],
      "bb": "8,133.6,322,336",
      "color": "blue",
      "label": "Service Package",
      "lheight": "0.23",
      "lp": "165,323.6",
      "lwidth": "1.28",
      "style": "tab",
      "_gvid": 0,
      "subgraphs": [
        1,
2
      ],
      "nodes": [
        5,6,7,8,9,10,11
      ],
      "edges": [
        4
      ]
    }
