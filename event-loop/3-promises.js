const {readFile, chownSync, writeFile}= require('fs').promises

// const util=require('util')
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);

// getText('./content/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err));

const start = async()=>{
    try {
        const first=await readFile('./content/first.txt','utf8')
        const second=await readFile('./content/second.txt','utf8') 
        console.log(first)
        console.log(second) 
        await writeFile('./content/result-mind-gr.txt',`This is a new firle wth ${first}`,{flag:'a'})
    } catch (error) {
        console.log(error)
    }
    

}

start()



// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }