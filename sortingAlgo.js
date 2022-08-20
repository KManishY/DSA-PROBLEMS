function runProgram(input) {
  //5 6 [ 12, 18, 17, 65, 46 ]
  input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  hassanSortingAlgo(n, k, arr);
  function hassanSortingAlgo(n, k, arr) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (arr[j] % k > arr[j + 1] % k) {
          swap(arr, j, j + 1);
        }
      }
    }
    console.log(arr.join(" "));
  }
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(temp)
  }
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
