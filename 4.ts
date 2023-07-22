function ChkPrime(No1 : number) : number
{
    var Cnt : number = 0
    var A : number = 0
   
    for(Cnt=1;Cnt<=No1;Cnt++)
    {
        if(No1%Cnt==0)
        {
            A++
        }
    }
    if(A==2)
    {
        return 1
    }
    else
    {
        return 0
    }
    

}
var i : number = 11
var Ret : number = 0
Ret = ChkPrime(i)
if(Ret==1)
console.log("It is prime number")
else
console.log("It is not prime number")



