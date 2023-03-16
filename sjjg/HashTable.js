// 散列表
import defaultToString from 'util'

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    // put(key,value)
    // remove(key)
    // get(key)

    // 散列函数
    loseloseHashCode(key) {
        // 先看key是不是一个数，如果是，直接返回
        if (typeof key === 'number') {
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }

    hashCode(key) {
        return this.loseloseHashCode(key)
    }

    // 将键和值加入散列表
    put(key, value) {
        if (kwy != null & value != null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }

    // 从散列表中获取一个值
    get(key) {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    // 从散列表中移除一个值
    remove(key) {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if (valuePair != null) {
            delete this.hash
        }
    }
}