function Area(No1 : number) : number
{
    var PI : number = 3.14
    var area : number = 0
    area = PI*No1*No1
    return area
}

var r : number = 5
var Ret : number = 0
Ret = Area(r)
console.log("Area of circle is "+Ret)
