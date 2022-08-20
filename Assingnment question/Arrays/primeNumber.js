// var number=10;
// var count=0;
// for(var i=1;i<=number;i++)
// {
//     for(var j=2;j<i;j++)
//     {
//         if(i%j==0)
//         {
//             count++;
//             break;
//         }  
//     }
// }
// if(count==0 && i!=1)
//     {
//         console.log(i);
//         count=0;
//     }


// // if(number%i==0){
// //     continue;
// // }
// // else{
// //     prime=prime+i;

// // }
// // console.log(prime);



//homework

for(var n = 2;n<=100; n++)
{

      var count = 0;

      for(var i=1; i<=n; i++)
      {
        if(n % i == 0)
        {
          count++;
        }
      }

      if(count==2)
      {
        console.log(n,"prime");
      }
//       else
//       {
//         console.log(n,"Not prime");
//       }

 }