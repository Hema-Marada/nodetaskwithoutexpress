const cron =require('node-cron')
const joi=require('joi')
const connection=require('./database/orders')
const express=require('express')
const app=express();
app.use(express.json())


const schema=joi.object({
    sno:joi.number().integer().required(),
    fname:joi.string().max(20).required(),
    lname:joi.string().max(20).required(),
    email:joi.string().email().max(20).required()
})



app.get('/',(req,res)=>
{
connection.query("select *from empdata",(err,result)=>
{
if(err){
res.send('error')
}
else{
res.send(result)
}
})

})
app.post('/',(req,res)=>
{

const{error,value}=schema.validate(req.body)
if(error)
{
console.log(error);
return res.send('invalid request...')
}
const data=req.body
connection.query("insert into empdata set ?",data,(err,result)=>
{
if(err){
res.send('error')
}
else{
res.send(result)
}
})
})
app.put('/:sno',(req,res)=>
{

const data=['Hema',req.params.sno];
connection.query("update empdata set name=? where sno=?",data,(err,result)=>
{
if(err)
{
res.send('error')
}
else{
res.send(result)
}
})
})
app.delete('/:sno',(req,res)=>
{

let emp_no=req.params.sno
connection.query("delete from empdata where sno = "+emp_no,(err,result)=>
{
if(err)
{
res.send('error')
}
else{
res.send(result)
}
})
})

app.listen(6000)