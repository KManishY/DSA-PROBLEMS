function Canbesorted(n, arr) {
  var bag = "";
  var arra = [];
  var j;
  for (var i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      var j = i;
      break;
    }
  }
  for (var l = 0; l < j; l++) {
    arra.push(arr[l]);
  }
  for (var k = arr.length - 1; k >= j; k--) {
    arra.push(arr[k]);
  }

  var array = arra.join(" ");
  let count = 0;
  for (var m = 0; m < array.length; m++) {
    console.log(array[m]);
    if (array[m] < array[m + 1]) {
    } else {
      count++;
      break;
    }
  }
  if (count == 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
let n = 15;
// let arr = [-1, 0, 1, 2, 3, 10, 9, 7, 6, 4];
let arr = [-1, 0, 1, 2, 3, 4, 5, 7, 8, 11, 10, 13, 12, 14, 15];
Canbesorted(n, arr);
