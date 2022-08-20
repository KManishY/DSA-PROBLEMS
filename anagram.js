   

// var arr = [11,48,63,9,42,22]
// arr.sort(function (a, b) {
// //   console.log(a, b)
// //   console.log(a-b)
//   return a - b;
// });
// console.log(arr);


var str1="rovin";
var str2 = "rovin";
var count = 0;
for (var i = 0; i < str1.length; i++) {
  for (var j = 0; j < str2.length; j++) {
    if (str1[i] == str2[j]) {
      // console.log("hi");
      count++;
      break;
    }
  }
}
// console.log(count)
if (count == str1.length) {
  console.log("Yes");
} else {
  console.log("No");
}