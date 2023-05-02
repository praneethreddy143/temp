const os = require('os');
// console.log(os);
const hostname=os.hostname();
console.log(hostname);
const user=os.userInfo();
console.log(user);
const version=os.version();
console.log(version);
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMeM:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs)