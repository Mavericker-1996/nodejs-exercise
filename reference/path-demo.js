const path = require('path');

console.log(__filename); // E:\前端\nodejs-exercise\path\path-demo.js
console.log(__dirname); // E:\前端\nodejs-exercise\path

// Base file name
console.log(path.basename(__filename)); // path-demo.js

// Directory name
console.log(path.dirname(__filename)); // E:\前端\nodejs-exercise\path

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

// resolve paths
console.log(path.resolve('/foo/bar', '/tmp/file/'));