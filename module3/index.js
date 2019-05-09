var mod = require('./counter'); // require的是对象的话，则保留引用

console.log(mod.counter.num);  // 1
mod.incCounter(); // 2
console.log(mod.counter); // 2