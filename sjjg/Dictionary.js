import defaultToString from 'util'
// console.log(defaultToString)

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    // 一个键是否存在于字典中
    hasKey(key) {
        // 对应位置不是null/undefined，返回true
        return this.table[this.toStrFn(key)] != null
    }
    // JS只允许使用字符串作为对象的键名or属性名
    // 如果传入一个复杂对象，需要先将他转为字符串


    // 在字典中设置键和值
    set(key, value) {
        // 如果key和value都不是null或undefined
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            // 创建一个新键值对并将其赋值给table对象的key
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }


    // 从字典中移除一个值
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }

    // 从字典中检索一个值
    get(key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)]
        }
        return undefined
    }
    // 另一种方式实现
    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    // keys values valuePairs
    keyValues() {
        return Object.values(this.table)
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }
    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }

    // 迭代字典中的每个键值对
    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (result == false) {
                break
            }
        }
    }
}

class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${this.key}:${this.value}]`
    }
}