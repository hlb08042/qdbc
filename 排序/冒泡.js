// 冒泡排序
const arr = [1, 6, 5, 3, 9, 3, 2, 6, 9, 4, 7]
// 基础写法
function bubbleSort(arr) {
    console.time("改进前")
    let length = arr.length
    let temp
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {  //j < length - 1 - i;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.timeEnd("改进前")
    return arr
}

console.log(bubbleSort(arr))

// 改进：设置一个标志变量，用于记录每次排序中最后一次交换的位置（这个变量之后的元素都已经完成交换，下次只要扫描到这里就可以了）
function bubbleSort2(arr) {
    console.time("改进后")
    let i = arr.length - 1
    let temp
    while (i > 0) {
        let pos = 0
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j
                temp = arr[j]
            }
        }
        i = pos
    }
    console.timeEnd("改进后")
    return arr
}

console.log(bubbleSort2(arr))


function bubbleSort3(arr) {
    console.time("改进后3")
    // 定义两个变量
    let low = 0
    let high = arr.length - 1
    let temp, j
    while (low < high) {
        // 正向冒泡
        for (j = low; j < high; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        high--
        // 反向冒泡
        for (j = high; j > low; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
        }
        low++
    }
    console.timeEnd("改进后3")
    return arr
}

console.log(bubbleSort3(arr), "3")