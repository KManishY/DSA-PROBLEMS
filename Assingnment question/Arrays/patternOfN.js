// You are given a number stored in
// a variable with the nameN
// You have to print all the numbers in the range from1
//  to N*N, such that there are exactlyNnumbers on each line
// For example, if the value stored inN = 3, then
// all the numbers in the range, from [1,9] need to be printed,
// such that there are 3 numbers on each line. Therefore, 
// the required output is
// 1 2 3
// 4 5 6
// 7 8 9
// Input
// The first and the only line of the input contains the value stored in the variableN
// Output
// Print all the numbers in the range from [1, N*N], as shown in the problem statement, such that there areN
function patternOfN(N) {
    // Write code here
    var sq =N*N;
    

    for(var i=1;i<=sq;i++)
    {    
           var beg="";
        for(var j=1;j<=N;j++)
        {
            beg=beg+" "+i;
            i++;
         //   console.log(i);

        }
        i--;
        console.log(beg);
    }
           

}