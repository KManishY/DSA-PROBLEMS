// function stringLength(str, i) {
//   if (str[i] == null) {
//     return 0;
//   }
//   return 1 + stringLength(str, i + 1);
// }

// let str = "masaischool";
// let i = 0;
// console.log(stringLength(str, i));

function RBS(arr, high) {
  if (high === 1) {
    return;
  }

  for (let i = 0; i < high; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  return RBS(arr, high - 1);
}

let arr = [3, 5, 0, 0, 8];
console.log(arr);
let high = arr.length;
// console.log(high);
let con = RBS(arr, high);

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log(temp);
}
function runProgram(input) {
  input = input.trim().split("\n");
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
