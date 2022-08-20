let n = 3;
let arr1 = [3, 2, 1];
let arr2 = [1, 3, 2];
let i = 1;
let count = 0;
while (i <= n) {
  if (arr1[i] === arr2[i] && i < n) {
    arr1.shift();
    arr2.shift();
    i++;
    count++;
  } else if (arr1[i] !== arr2[i]) {
    let a = arr1.shift();
    console.log("a: ", a);
    arr1.push(a);
    i--;
  }
}
console.log("hi");
