function minMax(N,arr){
    
    function isCriticalPoint(num,prev,next){
        return (num > prev && num > next || num < prev && num < next)
    }
    //get maximum number
    function getMax(arr){
        // console.log("line11",arr[arr.length-1])
        return (arr[arr.length - 1] - arr[0]);   
    }
    //get minimum number
    function getMin(arr){
        var min =Infinity;
        for (var i = 0; i < arr.length - 1; i++){
            var diff = arr[i + 1] - arr[i]
            if (min > diff) {
            min=diff;
            }
        }
        return min;
    }
    //logic part
    var distance = [];
    for (var i = 1; i < N - 1; i++){
    if (isCriticalPoint(arr[i], arr[i - 1], arr[i + 1])){
        distance.push(i)
  }
 }
    if (distance.length < 2) {
    console.log(-1, -1);
}
else{
    console.log(getMin(distance), getMax(distance));
    }
    // console.log(min,max)
}  

