const http=require('http')
const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('Homepage')
}
if(req.url==='/about'){
    
    for (let i=0;i<1000;i++){
        // for (let j=0;j<1000;j++){
            console.log(`${i}`)
        // }
    }
}
res.end('Error page')
})

server.listen(5000,()=>{
    console.log(`server is listening on port 5000`)
})