var mod = require('./counter'); // require的是值的拷贝

console.log(mod.counter);  // 3
mod.incCounter(); // 4
console.log(mod.counter); // 3