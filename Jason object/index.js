// var object1 = {
//     "name": "Ram","age": 12, "section":"A"
// }
// console.log(`My name is ${object1.name} and 
// I am ${object1.age}.
// I am in section ${object1.section}`)

// var abc = {
//     "name": "Ram","age": 12, "section":"A",
//     Total: function(){
//         console.log("This is inside object")
//     }
// }
// console.log(abc.Total())

// var jsobject = {
//     name: "Ram",age: 12, section:"A",
//     Total: function(){
//         console.log("This is inside object")
//     }
// }
// var a = JSON.stringify(jsobject)
// console.log(a)


var json = '{"name": "Ram","age": 12,"section":"A"}'
var val = JSON.parse(json)
console.log(val)
