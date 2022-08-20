function middle(size, arr) {
  if (size < 3) {
    console.log(-1);
  }
  else {
    var p = arr[1];
    while (p < size - 2) {
      var a = minFun(p, arr);
      var b = maxFun(p, arr);
      if (a == 1 && b == 1) {
        console.log(p);
        break;
      }
      p++;
    }

    function minFun(p, arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > p) {
          return 0;
        }
      }
      return 1;
    }
    function manFun(p, arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] < p) {
          return 0;
        }
      }
      return 1;
    }

  }
  function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    middle(size, arr)
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
}
