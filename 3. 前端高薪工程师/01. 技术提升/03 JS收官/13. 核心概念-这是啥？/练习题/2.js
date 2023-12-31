// 为所有对象添加方法print，打印对象的键值对

Object.prototype.print = function () {
  for (key in this) {
    // 不打印原型上的方法
    if (this.hasOwnProperty(key)) {
      console.log(key + ":" + this[key]);
    }
  }
};
var obj1 = {
  a: 1,
  b: 2,
};
var obj2 = {
  c: 3,
  d: 4,
};

obj1.print();
obj2.print();
