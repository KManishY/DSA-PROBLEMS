var n = 6;
var arr = [5, 8, 9, 13, 3, 1];
// for (var i = 0; i < arr.length; i++){
//     var min = i;
//     for (var j = i + 1; j < arr.length; j++){
//         if (arr[j] < arr[min]) {
//             min = j;
//         }
//     }
//     swap(arr, min, i);
// }
// console.log(arr.join(" "));
// function swap(arr, min, i) {
//     var temp = arr[i];
//     arr[i] = arr[min]; 
//     arr[min] = temp;
// }

arr.sort(function (a, b) {
    // console.log(a, b)
    // console.log(a-b)
    return a - b
});
console.log(arr);





function runProgram(input){
    //code here
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
