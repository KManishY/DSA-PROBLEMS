function runProgram(input) {
  //[ '10', '1 2 4 3 5 7 8 6 9 10' ]
  input = input.trim().split("\n");
  var num = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  // console.log(num,arr);

  removeToSort(num, arr);
  function removeToSort(num, arr) {
    var min = -Infinity;
    var bag = "";
    for (var i = 0; i < num; i++) {
      if (min <= arr[i]) {
        bag += arr[i] + " ";
        min = arr[i];
      }
    }
    console.log(bag);
  }
}

if (process.env.USER === "") {
  runProgram(`10
1 2 4 3 5 7 8 6 9 10`);
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
