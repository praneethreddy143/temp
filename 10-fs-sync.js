const {readFileSync,writeFileSync}= require('fs');
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8')
writeFileSync('./content/resultstring.txt',`here is the result of first :${first},${second}`,{flag:'a'})

// async file
const {readFile,writeFile}= require('fs');
const first1=readFile('./content/first.txt','utf-8',(err,result)=>{
 if(err)
 return err
 else
 console.log(result)
//  return result;
});
console.log(first1);
// const second=readFileSync('./content/second.txt','utf-8')
// writeFileSync('./content/resultstring.txt',`here is the result of first :${first},${second}`,{flag:'a'})