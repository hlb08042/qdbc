
var obj = {
    name: '张三',
    age: 23,
    isStudent: false,
    job: {
      name: 'FE',
      money: 12
    }
  }
//   var newObj = Object.assign({}, obj);
//   obj.job.money = 21;
// //   console.log(newObj.name);     // 输出张三
// //   console.log(newObj.age);      // 输出23
// //   console.log(newObj.job.money);// 输出21，受影响
// newObj.name = '李四'
// console.log(newObj)
// console.log(obj)

// var obj = {
//     name: '张三',
//     age: 23,
//   }
// //   let newObj = {...obj};
//   let newObj = obj
//   obj.name = "李四"
//   console.log(newObj.name);     // 输出张三
//   console.log(newObj.age);      // 输出23

// const a = {name:"hlb"}
// const b = {name:"hlb"}

// console.log(a==b)

// function shallowClone(obj) {
//   const newObj = {};
//   for(let prop in obj) {
//       if(obj.hasOwnProperty(prop)){
//           newObj[prop] = obj[prop];
//       }
//   }
//   return newObj;
// }

// let newObj = shallowClone(obj)
// console.log(newObj)

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}


function cloneObj(obj) {
  let clone = {};
  for (let i in obj) {
    // 如果为对象则递归更进一层去拷贝
    if (typeof obj[i] == "object" && obj[i] != null) {
      clone[i] = cloneObj(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
}
