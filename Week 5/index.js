// function calculateFactorial(x){
//     for()

// }
// calculateFactorial(5)

function isEven(x){
    if (x%2==0){
        console.log("It's even")
    }
    else{
        console.log("Its not even.")
    }
}
isEven(5)

const a = [1,2,3,4,5,6,7,8,9,10]
let num = a. map(myfunc)
function myfunc(n){
    return n
}
console.log(num)

function myfor(){
    for (i=0;i<a.length;i++){
        result= a[i]
        console.log(result)
    }

}
myfor()

const prices = [2400,3500,3200,4200,1900,2900,3100]
let num1= prices.map(myfun)
function myfun(n1){
    return n1+0.15
}
console.log(num1)

const books = [
{title:"The Great Gatsby",rating:4.2},
{title:"The Great Gatsby",rating:4.5},
{title:"The Great Gatsby",rating:4.9},
{title:"The Great Gatsby",rating:3.8},
{title:"The Great Gatsby",rating:4.7},
{title:"The Great Gatsby",rating:3.9}
]
let num2 = books.filter(myfucnt)
function myfucnt(result){
    ans = result
    res = result.rating
    return res
}
console.log(num2)