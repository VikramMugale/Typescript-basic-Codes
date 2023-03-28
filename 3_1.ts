
class Arithematic
{
    No1 : number
    No2 : number

    constructor(A : number, B : number)
    {
        this.No1 = A
        this.No2 = B

    }
    Addition() : number
    {
        let Ans : number = 0
        return this.No1+this.No2
    }
    Subtraction() : number
    {
        return this.No1-this.No2
    }
    Multiplication() : number
    {
        return this.No1*this.No2
    }
    Division() : number
    {
        return this.No1/this.No2
    }
}

var obj1 = new Arithematic(4,2)
var Ret : number = 0

Ret = obj1.Addition()
console.log("Addition is "+Ret)

Ret = obj1.Subtraction()
console.log("Subtration is "+Ret)

Ret = obj1.Multiplication()
console.log("Multiplication is "+Ret)

Ret = obj1.Division()
console.log("Division is "+Ret)


