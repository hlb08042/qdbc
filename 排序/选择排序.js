
function selectionSort1(arr) {
    const arrHasSort = []
    const arrNoSort = []
    let minValue, minKey
    // 找到最小的，放到前面
    minValue = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
            minKey = i
            // console.log(minValue,minKey)
        }
    }
    console.log(minValue, minKey)
}



const arr = [6, 2, 5, 8, 3, 7, 4, 1, 0, -3]
console.log(selectionSort(arr))

function selectionSort(arr) {
    let minIndex, temp
    for (let i = 0; i < arr.length - 1; i++) {    // why len-1 :默认第一个元素已完成排序
        minIndex = i
        // 寻找最小的元素
        for (let j = i + 1; j < arr.length; j++) {// why j=i+1 ：从i的下一个元素开始找最小元素
            // 如果找到比minIndex所在位置元素还小的元素，就更新minIndex为新元素索引
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        console.log(`第${i}次排序，当前最小的元素：${arr[minIndex]}，当前的arr[i]：${arr[i]}`)
        // 已获取到未排序序列最小元素arr[minIndex]
        // 把arr[minIndex]放到arr[i]的位置（交换）
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
        console.log(`第${i}次排序，当前结果：${arr}`)
    }
    return arr
}