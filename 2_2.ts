function Summation(No1 : number[]) : number
{
    var Cnt : number = 0
    var sum : number = 0
    for(Cnt=0;Cnt<No1.length;Cnt++)
    {
        sum=sum+No1[Cnt]
    }
    return sum
}

var a : number[]=[23,6,7,4,5,7]
var Ret : number = 0
Ret = Summation(a)
console.log("Addition is "+Ret)
