function quickSort(arr) {
    if (arr.length === 0) {
        return arr
    }
    let compareNum = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < compareNum) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([compareNum]).concat(quickSort(right))
}

const arr = [9, 5, 6, 2, 7, 7, 0, 6, 1, -1, 5, 8, 3, 4]
console.log(quickSort(arr))