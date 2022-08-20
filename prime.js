function runProgram(input) {
  //[ '4', '1 5 7 9', '2 4 6 8' ]
  //code here
  input = input.trim().split("\n");
  var size = +input[0];
  var arr1 = input[1].trim().split(" ").map(Number);
  var arr2 = input[2].trim().split(" ").map(Number);
  // console.log(size,arr1,arr2)
  performMerging(size, arr1, arr2);
  function performMerging(size, arr1, arr2) {
    var arr = [];
    for (var i = 0; i < size; i++) {
      arr.push(arr1[i], arr2[i]);
    }
    var N = arr.length;
    Sort(N, arr);
    function Sort(N, arr) {
      for (var i = 0; i < N; i++) {
        var min = i;
        for (var j = i; j < N; j++) {
          if (arr[j] < arr[min]) {
            min = j;
          }
        }
        swap(arr, min, i);
      }
      console.log(arr.join(" "));
      function swap(arr, j, i) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
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
