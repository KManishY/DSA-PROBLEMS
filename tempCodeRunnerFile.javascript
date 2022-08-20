function runProgram(input){
   input = input.trim().split("\n");
   var n = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
   smallerNumber(n, arr);
     function smallerNumber(n,arr){
        // console.log(n,arr)
        var s = [];
        var beg ="";
        for(var i=0;i<n;i++){
                while((s.length!=0)&&(s[s.length-1]>=arr[i])){
                  s.pop();  
                }
                if(s.length==0){
                    beg+=-1 +" "
                }
                else{
                    beg+=s[s.length-1]+" ";
                }
                s.push(arr[i]);
            }
            console.log(beg)
        }
        
        
    

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