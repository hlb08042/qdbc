// 创建一个对象
let obj = {
    name:'hlb',
    age:18,
}
// 数据属性描述符
Object.defineProperty(obj,"address",{
    // 配置项
    // 属性的value值
    value:"Beijing",
    // configurable：是否可以通过delete删除属性、是否可修改其特性、是否可修改为存取属性描述符
    configurable:false,
    // enumerable：是否可枚举（通过for-in或Object.keys遍历）
    enumerable:true,
    // writable：属性的值是否可被修改
    writable:false
})

obj.address = "Guangzhou" // 无效
delete obj.address  // 无效
console.log(obj.address)  // 仍然输出Beijing