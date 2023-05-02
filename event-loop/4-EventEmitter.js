const eventEmitter = require('events')

const customEmitter = new eventEmitter();
customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} with ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic`)
})
customEmitter.emit('response','john',45)

 const http=require('http')

 const server = http.createServer()
 server.on('request',(req,res)=>{
    res.end(`welcome`)
 })
 server.listen(5000,()=>{
    console.log(`server is listening on 5000`)
 })