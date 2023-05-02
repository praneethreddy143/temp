const http = require('http')
const server=http.createServer((req,res)=>{

console.log(req);
if(req.url==='/')
{
res.end('Welcomme to our homepage');
}
else if(req.url==='/about'){
res.end('Welcomme to our aboutpage')
}
else 
{
res.end(`<h1>OOps</h1>
<p>We cant seem to find the requested page</p>`)}
})

server.listen(5000)