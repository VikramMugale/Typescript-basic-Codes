function Maximum(A : number[]) : number
{
  var Cnt : number = 0
  var large : number = 0
  var second : number = 0
  for(Cnt=0;Cnt<A.length;Cnt++)
  {
    if(A[Cnt]>large)
    large=A[Cnt]
  }
  for(Cnt=0;Cnt<A.length;Cnt++)
  {
    if(A[Cnt]<large)
    second=A[Cnt]

  }
  return second
 
}

var Arr : number[] = [23,89,6,29,56,45,77,32]
var Ret : number = 0
Ret = Maximum(Arr)
console.log("Second Maximum number is "+Ret)
