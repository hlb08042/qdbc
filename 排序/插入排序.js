function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // 先缓存此次取出的元素
        let key = arr[i]
        let j = i - 1
        // 取出元素之前的元素：都为已排序完成的，进行对比与交换
        while (j >= 0 && arr[j] >key) {
            arr[j + 1] = arr[j]
            j--
        }
        // 在正确位置进行赋值
        arr[j + 1] = key
    }
    return arr
}

const arr = [8, 9, 6, 3, 1, 3, 2, 0, -1]
console.log(insertionSort(arr))