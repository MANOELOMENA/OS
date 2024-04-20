const os = require("node:os");

console.log(os.cpus()[0].model);
console.log(os.cpus()[0].length);
console.log(os.freemem());
console.log(os.homedir());
console.log(os.type());