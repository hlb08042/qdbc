var obj ={
    name:"hlb",
    age:18
}

// obj.__proto__.address = "广州"

// console.log(obj.address)

// Object的原型

// console.log(obj.__proto__)
// console.log(Object.prototype)
// console.log(Object.prototype === obj.__proto__)


// Person构造函数原型
function Person(){

}
console.log(Person.prototype.__proto__)//[Object: null prototype] {}