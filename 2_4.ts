function ChkArmstrong(No1 : number) : void
{
   var b : number = No1
   var i : number = 0
   var sum : number = 0
   while(b>0)
   {
    i=b%10
    sum=sum+(i*i*i)
    b=b/10
   }
   if(sum==No1)
   console.log("It is Armstrong number") 
   else
   console.log("It is not Armstrong number")
}

var a : number = 153
ChkArmstrong(a)