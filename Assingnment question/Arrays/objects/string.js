var name1 = `sayak`;
var details = {};

for(var i = 0; i<name1.length; i++){
  var char = name1[i];
//   console.log(char);
//   console.log(details[char]);
  if(details[char]=== undefined){
    details[char]=1;
  }
  else{
    var prev = details[char];
    details[char]=prev+1;
  }

// console.log(details);
}
for(k in details){
  console.log(k+`-`+details[k]);
}
// console.log(details);

