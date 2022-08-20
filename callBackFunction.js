function runProgram(input){
  input = input.trim().split('\n')
  console.log(input) // [ '4', '5 ', '7 ', '2', '8' ]
  var tc = Number(input[0]) //4
  //even or odd
  var line = 1
    
    
    for(var i=0;i<tc;i++){
        var num = Number(input[line])
        line++
        evenOrOdd(num)
    }
    
    // i=0->0<4-true --> num=Number(input[1])=5 , line=1+1=2 --> num =5
    // i=1 ->1<4-true -->num=Number(input[2])=7 , line = 2+1=3 -->num = 7
    // i=2 ->2<4 - true -->num=Number(input[3])=2 , line = 3+1=4 --> num =2
    // i=3-->3<4 - true -->num=Number(input[4])=8 , line=4+1 =5 -->num =8
    // i=4-->4<4 -- false- for loop ends
    

}

function evenOrOdd(input){
    console.log(input,"25")
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






function runProgram(input){
    //even or odd
    input = input.trim().split("\n")
    console.log(input)  // [ '2', '5 2 4', '7 6 8 9' ]
    
    var tc = Number(input[0]) //2
    var line = 1
    
    for(var i=0;i<tc;i++){
        var arr = input[line].trim().split(" ").map(Number)
        line++
        //console.log(arr)
        sumOfArray(arr)
    }
    
    
    // // i=0--> 0<2 ->true -> arr=input[1].trim().split(" ").map(Number)
    //                             = [5,2,4] --> line =2
    // // i =1 --> 1<2 ->true -> arr= input[2].trim().split(" ").map(Number)
    //                             = [7,6,8,9] --> line =3
    // // i=2 --> 2<2 -- false-->for loop ends
    
}

function sumOfArray(arr){
    console.log(arr)
    //write logic here
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




function runProgram(input){
    //even or odd
    input = input.trim().split("\n")
    console.log(input) //[ '2', '3', '5 2 4', '4', '7 6 8 9' ]
    
    var tc = Number(input[0]) //2
    
    var line = 1
    
    for(var i=0;i<tc;i++){
        var len = Number(input[line])
        line++
        var arr = input[line].trim().split(" ").map(Number)
        line++
        console.log(len,arr)
    }
    
    
    // // i=0->0<2->true -> var len = Number(input[1])=3-->line=2
    //         var arr = input[2].trim().split(" ").map(Number)
    //             arr = [5,2,4] --> line = 3
    // // i=1-->1<2->true-> var len =Number(input[3])=4-->line = 4
    //     var arr = input[4].trim().split(" ").map(Number)
    //         arr = [7,6,8,9] --> line =5
    // // i=2-->2<2 - false
    
    
    
}

function sumOfArray(arr){
    console.log(arr)
    //write logic here
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


function runProgram(input){
    input = input.trim().split('\n')
    console.log(input) //[ '2', '3', '5 2 4', '7', '4', '7 6 8 9', '9' ]
    var tc = Number(input[0])
    var line = 1
    
    for(var i=0;i<tc;i++){
        var len = Number(input[line])
        line++
        var target = Number(input[line])
        line++
        var arr = input[line].trim().split(" ").map(Number)
        line++
        
        //console.log(len,target,arr)
                    findTarget(len,arr,target)

    }

}

function findTarget(len,arr,target){
    //write logic
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



// array destructuring

var nums = [1,2,3,4,5,5,6,7,8]
// var one = nums[0]
// var two =nums[1]
// var three = nums[2]
// var four = nums[3]

// var [one,two,three,four,five,.......]  = [1,2,3,4,5,5,6,7,8]



// 3
// 1 4 5
// 6 7 8
// 6 5 4


// [[1,4,5],[6,7,8],[6,5,4]]

// step1: create empty matrix []
// step2 : push each and every row inside the mat [[1,4,5],[6,7,8],[6,5,4]]




function runProgram(input){
    input = input.trim().split("\n")
    var [row,col] = input[0].trim().split(" ").map(Number)
    var mat = []
    
    for(var i=1;i<=row;i++){
        mat.push(input[i].trim().split(" ").map(Number))
    }
    console.log(mat)
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