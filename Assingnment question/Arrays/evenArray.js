var m = [ 25, 30, 28, 40, 48, 41, 50];

var add=0;
var count = 0;

for(var i=0; i<m.length; i++)
{
  if(m[i]%2==0)
  {
    add = add + m[i];
    count++;
  }
}

var average = add/count;
console.log(average);