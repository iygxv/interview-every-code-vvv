

// 当绑定一个属性时，两者相同
// exports.a = 'a'
// module.exports.b = 'b'

// 不能直接赋值给exports，也就是不能直接使用exports={}这种语法
// exports = {a : 'a'}
// module.exports = {
//   b: 'b'
// }

// 直接给module.exports赋值了，之前绑定的属性都会被覆盖掉
// exports = {a : 'a'}
// module.exports.b = 'b'
// module.exports = {
//   c: 'c'
// }


var b = require('./b')
exports.a = 'a'
console.log('a模块');
console.log('a模块引用b模块: ' + b.b);

