// 求一个数组的最大值（使用递归思想）

const myArr = [1, 2, 6, 3, 8, 22, 5, 8, 1, 0]

// 先处理简单的情况
//      当数组长度为0：返回null
//      当数组长度为1：返回第0项元素
//      当数组长度为2：返回比较后的较大值
// 再处理较为复杂的情况
//      当数组长度大于2：将当前数组分为两半，分别求两边的最大值

function findMax(arr) {
    // 数组长度为0~2时，简单情况直接处理
    if (arr.length === 0) {
        return null
    } else if (arr.length === 1) {
        return arr[0]
    } else if (arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }
    // 数组长度大于2
    // 获取中间元素的位置
    const center = Math.floor(arr.length / 2)  //floor:取整
    // 把数组分成两部分，分别重新调用findMax函数，得到两边的最大值（递归）
    const maxLeft = findMax(arr.slice(0, center))
    const maxRight = findMax(arr.slice(center))
    // 对两个最大值进行比较
    return maxLeft > maxRight ? maxLeft : maxRight
}
console.log(findMax(myArr)) //22


//数组遍历，使用递归实现
var myArr2 = [1, 2, 3, 4, 5]
function iteration(arr) {
    if (arr.length == 0) return
    if (arr.length == 1) {
        console.log(arr[0])
        return
    }
    console.log(arr[0])
    iteration(arr.slice(1))
}
iteration(myArr2)  //  1  2  3  4  5


// 计算阶乘：使用递归实现
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(5))//120

// 计算阶乘：使用循环实现
function factorialWithFor(num) {
    let total = 1
    for (let n = num; n > 1; n--) {
        total = total * n
    }
    return total
}
console.log(factorial(5))//120

