function ChkString(A : string) : void
{
    var Cnt : number = 0
    var b : string = ""
   for(Cnt=0;Cnt<A.length;Cnt++)
   {
    if(A[Cnt]==" ")
    {
        if(b=="Marvellous")
        console.log("String Contains Marvellous in it")
        b=""
    }
    else
    {
        b=b+A[Cnt]
    }
   }
}

var Str : string = "Pune Kothrud Marvellous Infosystems"
ChkString(Str)