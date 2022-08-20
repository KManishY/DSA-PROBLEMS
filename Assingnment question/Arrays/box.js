for(var father=1; father<=10; father++)
{
  var bag="";
  for(var son=1; son<=10; son++)
  {
    if(father==1 || father == 10)
    {
      bag = bag + "*";
    }
    else
    {
      if(son==1 || son==10)
      {
        bag = bag + "*";
      }
      else
      {
        bag = bag + " ";
      }
    }
  }
  console.log(bag);
}