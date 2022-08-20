




var arr = [2, 3, 5, 8, 9, 10, 11];
var val = 11; 
var arrSize =7;
console.log(isPairSum(arr, arrSize, val));
 
function isPairSum(A, N, X)
{
    var i = 0;
    var j = N - 1;

     while (i < j) {
        if (A[i] + A[j] == X) {
            return true;
        }
        else if (A[i] + A[j] < X) {
            i++;
        }
        else {
            j--;
        }
    }
    return false;
}
 


function runProgram(input){
    input = input.trim().split("\n");
    console.log(input);
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