class Set {
    constructor() {
        this.items = {}
    }
    // add(element)         添加一个元素
    // delete(element)      删除一个元素
    // has(element)         该元素是否在集合中
    // clear()              移除集合中所有元素
    // size()               集合包含的元素数量
    // values()              返回一个包含集合中所有元素的数组

    has(element) {
        // 使用in运算符验证给定元素是否是items对象的属性
        return element in this.items
    }
    // 更好的实现方式
    has(element) {
        // hasOwnProperty返回一个表明对象是否具有特定属性的布尔值
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    add(element) {
        // 先检查给定的element是否已存在
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }

    clear() {
        this.items = {}
    }

    size() {
        // Object.keys返回一个包含给定对象的所有属性的数组
        return Object.keys(this.items).length
    }

    values() {
        return Object.values(this.items)
    }

    // 并集
    union(otherSet) {
        // 创建一个新集合代表并集
        const unionSet = new Set()
        // 获取当前集合的所有值,迭代添加到创建的并集中
        this.values().forEach(value => unionSet.add(value))
        // 对传入的集合做相同操作
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet
    }

    // 并集也可以这样写(不使用ES6语法)
    union(otherSet) {
        const unionSet = new Set()

        let values = this.values
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return otherSet
    }

    // 并集
    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet = values
        let smallerSet = otherValues
        // 比较两个集合的大小
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues
            smallerSet = values
        }
        // 遍历较小集合
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })
        return intersectionSet
    }

    // 差集
    difference(otherSet) {
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })
        return differenceSet
    }

    // 子集
    inSubsetOf(otherSet) {
        // 先比较两个集合的长度
        if (this.size() > otherSet.size()) {
            return false
        }
        // 假定当前实例是给定集合的子集
        let isSubset = true
        // 迭代当前集合
        this.values().every(value => {
            // 验证这些元素也存在于otherSet中
            // 如果有任何元素不存在,那么就不是子集
            if (!otherSet.has(value)) {
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
    }
}