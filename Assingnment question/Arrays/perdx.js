function applyBasicMaths(N,A){
    var min = Infinity;
    var ans = -1;
    for(var i=0;i<N;i++)
    {
        var temp =0;
        for(var j=0;j<N;j++)
        {
            if(i!==j){
                temp =temp+A[j];
                // console.log("temp",temp)
            }
            
           
        }
            if(temp%7===0 && A[i]<min){
                min =A[i];
            }
         
        
    }
    if(temp%min===0){
                // console.log(min)
                ans =i;
            }
        //  if(temp%min==0){
        //         console.log(min)
        //     }
    console.log(ans);