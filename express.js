var express=require('express')
var a=express()
// a.use(express.json())
const v = require('./data.js')
a.get('/api/get',(request,response)=>{
response.send(v)
})

a.post('/api/post',(req,res)=>
{
    console.log(req.body)
    v.push(req.body)
    res.send(201)

})

a.delete('/api/:Name',(req, res)=>
{
var d=v.find(c=>c.Name===req.params.Name)
const index = v.indexOf(d);
v.splice(index,1);

res.send(d);
})   

a.put('/api/:Name',(req, res)=>
{
var d=v.find(c=>c.Name===req.params.Name)
d.Age = req.body.Age;
res.send(d);

})
    
   
var c=4000
var d='172.17.12.155'

a.listen(c,d,()=>
{
    console.log(`The server is running on http://${d}:${c}/api`)
    console.log("The server is running on http://%s:%s",d,c)
})

// a.listen(c,d,()=>
// {
//     console.log(`The server is running on http://${d}:${c}/Postapi`)
//     console.log("The server is running on http://%s:%s",d,c)
// })
// a.listen(c,d, ()=>{
   
//     console.log(`The server is running on http://${d}:${c}/Deleteapi`);
// });