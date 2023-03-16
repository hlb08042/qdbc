import defaultEquals from 'util'
import Node from 'linked-list-models'
// console.log(defaultEquals)

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        // 保存第一个元素的引用
        this.head = undefined
        // 用于比较链表中的元素是否相等
        this.equalsFn = equalsFn //???
    }
    // LinkedList类的方法
    // 向链表尾部添加元素
    push(element) {
        // 创建Node项
        const node = new Node(element)
        let current
        // 如果head为空 => 要向链表添加第一个元素
        if (this.head == null) {
            // 让head元素指向node元素
            this.head = node
        } else {
            // 如果head不为空 => 要向尾部找到添加一个元素 => 要先找到最后一个元素
            current = this.head
            // 当current.next = null 时 => 已到达链表尾部
            while (current.next != null) {
                current = current.next
            }
            // 将next赋值为新元素
            current.next = node
        }
        this.count++
    }
    // removeAt 从链表中移除元素
    removeAt(index) {
        // 先检查输入索引是否合法
        if (index >= 0 && index < this.count) {
            let current = this.head
            // 如果索引为0，移除第一项元素
            if (index === 0) {
                this.head = current.next
            } else {
                // 移除非起始项元素
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }

    // 循环迭代链表直到目标位置
    getElementAt(index) {
        // 检查索引是否合法
        if (index >= 0 && index <= this.count) {
            // 初始化node变量，从头开始（node也可以跟前面一样命名为current）
            let node = this.head //?
            // 遍历整个链表直至到达index位置
            for (let i = 0; i < index && node != null; i++) {
                // 一步一步往前走
                node = node.next
            }
            return node
        }
        return undefined
    }

    // 在任意位置插入元素
    insert(element, index) {
        // index是否合法
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            // 如果在第一个位置添加
            if (index === 0) {
                const current = this.head   //对链表第一个元素的引用
                node.next = current         //现在head和node.next都指向current
                this.head = node            //把head的引用改为node => 链表中就有了一个新元素
            } else {
                // 如果在中间或尾部添加
                // //迭代链表找到目标位置，index-1为要添加位置的前一个
                // previous是对前一个位置的引用
                const previous = this.getElementAt(index - 1)
                // current是对后一个位置的引用
                const current = previous.next
                // 要在previous和current之间添加元素    
                // 把新元素和当前元素连接起来          
                node.next = current
                // previous.next 指向 node ， 取代current
                previous.next = node
            }
            // 更新链表的长度
            this.count++
            return node
        }
        return false
    }


    // 返回一个元素的位置
    indexOf(element) {
        let current = this.head
        // 从head开始 迭代元素 直到count
        for (let i = 0; i < this.count && current != null; i++) {
            // 验证current节点的元素和目标节点的元素是否相等
            if (this.equalsFn(element, current.element)) {
                // 相等就直接返回，否则继续迭代
                return i
            }
            current = current.next
        }
        // 迭代到尾部还没找到，返回-1
        return -1
    }

    // 从链表中移除元素
    remove(element){
        // 利用indexOf方法，找到目标元素的位置
        const index = this.indexOf(element)
        // 利用removeAt方法，根据目标元素的位置移除元素
        return this.removeAt(index)
    }

    // 获取链表元素数量
    size(){
        return this.count
    }

    // 是否为空
    isEmpty(){
        return this.size() === 0
    }

    // 获取第一个元素
    getHead(){
        return this.head
    }

    // 将链表对象转换成字符串
    toString(){
        // 若首项元素为null，说明整个链表为空，返回空字符串
        if(this.head == null){
            return ''
        }
        // 若链表不为空，用第一个元素的值来初始化字符串
        let objString = `${this.head.element}`
        let current = this.head.next
        // 迭代链表
        for(let i = 1; i<this.size() && current!=null ; i++){
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}



// 需要一个助手类 用于表示链表中的元素
class Node {
    constructor(element) {
        // 要加入链表的元素的值
        this.element = element
        // 指向链表中下一个元素的指针
        this.next = undefined
    }
}


