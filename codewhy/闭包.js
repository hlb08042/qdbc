// 函数作为返回值时

function makeAdder(count){
    // 在函数内部定义函数
    function add(num){
        return count + num
    }
    return add
}

var add5 = makeAdder(5)
console.log(add5(6)) //11

var add8 = makeAdder(8)
console.log(add8(9)) //17


// 数组中的函数使用
  