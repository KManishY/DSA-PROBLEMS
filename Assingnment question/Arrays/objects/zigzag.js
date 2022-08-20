     // need to find position of K
     var row_of_k, col_of_k;
  
     // need to find position of K
       for(var i = 0; i < R; i++){
           for(var j=0; j < C; j++){
               if(matrix[i][j] == K){
                   row_of_k = i;
                   col_of_k = j;
               }
           }
       }
       
       var diff = row_of_k - col_of_k; // diff = pos of k
       console.log(diff);
       
       // I want to print all elements which lie on diagonal
       // with same difference
       var bag = " "
       for(var i = 0; i < R; i++){
           for (var j = i - diff;j<C;j++){   //why? i - j = diff => j = i-diff;
         //   console.log(matrix[i][j]);
             if ( j == i-diff){
             bag = bag + matrix[i][j] +  " ";
             }
           }
       }
       console.log(bag);
      
         // I want to print all elements which lie on diagonal
       // with same sum
       
       var sum = row_of_k + col_of_k;
       for(var i = 0; i < R; i++){
           for(var j=sum-i;j<C;j++){
           var j = sum - i;   //why? i + j = sum => j = sum - i;
           console.log(matrix[i][j]);
           }
           
       }