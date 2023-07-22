function Fibonacci(No1 : number) : void
{
   var a : number = 0
   var b : number = 1
   var sum : number = 0
   console.log(a)
   console.log(b)
   while(sum<No1)
   {
    sum=a+b
    console.log(sum)
    a=b
    b=sum
   
    
   }
}

var A : number = 21
Fibonacci(A)
