function Maximum(No1 : number, No2 : number, No3 : number) : number
{
    var Cnt : number = 0
    if(No1>No2)
    {
        if(No1>No3)
        {
            Cnt=No1
        }
        else
        {
            Cnt=No3
        }
        
    }
    else
    {
        Cnt=No2
    }
    return Cnt
    
}

var A : number = 23
var B : number = 89
var C : number = 6
var Ret : number = 0
Ret = Maximum(A,B,C)
console.log("Maximum number is "+Ret)