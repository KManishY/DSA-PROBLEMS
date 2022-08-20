for(var m=1; m<=12; m++)
{
  var totalDays;

  if(m==2)
  {
    totalDays = 28;
  }
  else if(m==4 || m==6|| m==9 || m==11)
  {
    totalDays = 30;
  }
  else{
    totalDays=31;
  }

  switch(m)
  {
    case 1 : console.log("jan");
             break;
    
    case 2 : console.log("Feb");
              break;
    
    case 4 : console.log("Mar");
              break;
    case 5 : console.log("Mar");
              break;
    case 6 : console.log("Mar");
              break;
    case 7 : console.log("Mar");
              break;
    case 8 : console.log("Mar");
              break;
    case 9 : console.log("Mar");
              break;
    case 10 : console.log("Mar");
              break;
    case 11 : console.log("Mar");
              break;
    case 12 : console.log("Mar");
              break;
    
              
  }

  for(var day=1; day<=totalDays; day++)
  {
    console.log(m+"-"+day);
  }
}
