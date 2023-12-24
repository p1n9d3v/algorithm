const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
rl.on("line", function (line) {
  n = line;
  rl.close();
});
rl.on("close", function () {
  switch (n) {
    case "A+": {
      process.stdout.write("4.3");
      break;
    }
    case "A0": {
      process.stdout.write("4.0");
      break;
    }
    case "A-": {
      process.stdout.write("3.7");
      break;
    }

    case "B+": {
      process.stdout.write("3.3");
      break;
    }
    case "B0": {
      process.stdout.write("3.0");
      break;
    }
    case "B-": {
      process.stdout.write("2.7");
      break;
    }
    case "C+": {
      process.stdout.write("2.3");
      break;
    }
    case "C0": {
      process.stdout.write("2.0");
      break;
    }
    case "C-": {
      process.stdout.write("1.7");
      break;
    }
    case "D+": {
      process.stdout.write("1.3");
      break;
    }
    case "D0": {
      process.stdout.write("1.0");
      break;
    }
    case "D-": {
      process.stdout.write("0.7");
      break;
    }
    default: {
      process.stdout.write("0.0");
    }
  }
});
