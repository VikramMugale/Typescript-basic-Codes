function Maximum(A : number[]) : number
{
  var Cnt : number = 0
  var large : number = 0
  for(Cnt=0;Cnt<A.length;Cnt++)
  {
    if(A[Cnt]>large)
    large=A[Cnt]
  }
  return large
 
}

var Arr : number[] = [23,89,6,29,56,45,77,32]
var Ret : number = 0
Ret = Maximum(Arr)
console.log("Maximum number is "+Ret)
