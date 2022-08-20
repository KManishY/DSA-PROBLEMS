// // //output =1;
// // let n = 4;
// // let k = 3;
// // let arr = [2, 3, 4, 6];

// // //1.check the longest sub array
// // //2.if longest subArray is no divisible by k then count.

// //balnced peranthesis

// function balanced(bracket) {
//   let n = bracket.length;
//   let stack = [];
// //   console.log('stack: ', stack);
// //   console.log(n);
//   for (let i = 0; i < n; i++) {
//     if (bracket[i] == "{" || bracket[i] == "[" || bracket[i] == "(") {
//           stack.push(bracket[i]);
//           continue;
//       // console.log('stack: ', stack);
//         }
//         if (stack.length==0) {return false;}
//         let check;
//     switch (bracket[i]) {
//           case "}":
//                 check = stack.pop();
//                 if (check == '[' || check == '(') {
//                       return false;
//                 }
//           case "]":
//                 check = stack.pop();
//                 if (check == '{' || check == '(') {
//                       return false;
//                 }
//           case ")":
//                 check = stack.pop();
//                 if (check == '[' || check == '{') {
//                       return false;
//                 }
//     }
//  }
//       return (stack.length == 0);
// }
// let brackets = ["{", "[", "(", ')', "]", "}"];
// let str ="{[()]}"
// // console.log(balanced(str));
// // balanced(str);
// if (balanced(str)) {
//       console.log("Balanced")
// }
// else {
//       console.log("Notbalanced");
// }

// e to the power x

// let N = 3;
// let X = 2;

// function eToPowerX(e,n) {
//       if (n == 0) { return 1; }

//   }

//recursive bubble sort function

let arr = [5, 2, 9, 3];
let i = 0;
let n = arr.length - 1;
console.log(sort(arr, n));

function sort(arr, n) {
  if (n == 1) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return sort(arr, n - 1);
}

//Famous Sum
//148 3
// let str = "143";
// let k = 3;
// x = +superDigits(N);
// p = X * K;
// ans = superDigits(p.toString())
// print ans;

// function superDigits(str) {
//       if (str.length == 1) {
//             return str;
//       }
//       if (str.length == 0) {
//             return str;
//       }
//       if()
//       for (let i = 0; i < str.length; i++) {
//             let sum= sum+Number(str[i]);
//             }
//       superDigits(sum.toString());
// }

// hgg;

//GCD
function gcd(a, b) {
  // Everything divides 0
  if (a == 0) return b;
  if (b == 0) return a;

  // base case
  if (a == b) return a;

  // a is greater
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

let a = 98,
  b = 56;
console.log(gcd(a, b));
