//modules
const sayhi=require('./5-utlis')

const names =require('./4-names')
const items=require('./6-alternativeflavor')
const addfunction=require('./7-mindgrinder');

// console.log(names);
// console.log(items.singlePerson)
// console.log(items.items)
sayhi(names.she);
sayhi(names.pranay)
// console.log(addfunction.add(10,11))
// console.log(addfunction);

const sum=addfunction.add(10,20);
console.log(sum);