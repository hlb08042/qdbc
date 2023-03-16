/*
// 监听对象的操作
var obj ={
    name:"hlb",
    age:21
}
// 方式一：存储属性描述符
// 监听单个属性
Object.defineProperty(obj,"name",{
    get:function(){
        console.log("我被get了")
    },
    set:function(){
        console.log("我被set了")
    },
})

console.log(obj.name)
obj.name = "HLB"

// 监听所有属性
// 对所有key做遍历
Object.keys(obj).forEach(key=>{
    console.log(key)
})

*/

const obj = {
    name:'hlb',
    age:21
}

const objProxy = new Proxy(obj,{
    // 重写捕获器
    get:function(target,key){
        console.log(`监听到对象的${key}被get了`,target)
        return target[key]
    },
    set:function(target,key,newValue){
        console.log(`监听到对象的${key}被set了`,target)
        target[key] = newValue
    },
    has:function(target,key){
        console.log(`监听到对象的${key}属性in操作`,target)
        return key in target
    },
    deleteProperty:function(target,key){
        delete target[key]
        console.log(`监听到对象的${key}属性delete操作`,target)
    }
})
console.log(objProxy.name)
//监听到对象的name被get了 { name: 'hlb', age: 21 }
// hlb

console.log(objProxy.age)
// 监听到对象的age被get了 { name: 'hlb', age: 21 }
// 21

objProxy.name = "HLB"
// 监听到对象的name被set了 { name: 'hlb', age: 21 }

console.log(obj)
// { name: 'HLB', age: 21 }


console.log("name" in objProxy )
// 监听到对象的name属性in操作 { name: 'HLB', age: 21 }
// true

delete objProxy.name
// 监听到对象的name属性delete操作 { age: 21 }