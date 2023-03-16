function foo(num){
    if(num == 1|| num ==2){
        return num
    }
    return foo(num-1)+foo(num-2)
}

console.log(foo(40))