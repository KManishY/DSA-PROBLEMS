// var subjects = ['maths','reasoning','gs','polity']
// var teacher = ['abhinadan','polkit','vivek','vikas sir']

// var last =teacher.length-1;
// for(var i=0;i<=last;i++)
// {
//     console.log(subjects[i],"-",teacher[i]);
// }



// Pop function
// it is bacically use to delete the value inside the arrys
// pop function always delete from the last

// subjects.pop()
// console.log(subjects);



// problem print number arrys using loop
// var number=[1,2,3,4,5,6,7,8,9,10,11];
// //1st way to delete
// number.pop();
// number.pop();
// number.pop();


// if i want to skip any number then
// for(i=0;i<number.length;i++)
// {
//     console.log(number[i]);
// }



// print the last half of array
var number=[1,2,3,4,5,6,7,8,9,10,11];

var start;
if(number.length%2==0){
start =(number.length)/2;
}
else{
     start=Math.floor(number.length-1)/2;
}

for(var i=start;i<number.length;i++)
{
    console.log(number[i]);
}




// print the first half of array
// var number=[1,2,3,4,5,6,7,8,9,10,11];

// var start;
// if(number.length%2==0){
// start =(number.length)/2;
// }
// else{
//      start=Math.floor(number.length-1)/2;
// }

// for(var i=0;i<start;i++)
// {
//     console.log(number[i]);
// }





// find the highest marks

var m = [43,63,67,98,82,47];
var check = m[0];
for(var i=0;i<m.length;i++){
    if(m[i]>check){
        check=m[i];
    }

}
console.log(check);