var express=require('express')
const joi=require('joi')
const app= express()
app.use(express.json())

const schema=joi.object({
Name:joi.string().max(20).required(),
Age:joi.number().integer().min(2).max(100),
Team:joi.string().max(20).required()
})

const postValidatilmid = async (req, res, next)=>{
    let value = schema.validate(req.body)

    if(value.error){
        log
    }else{
        next()
    }
}


const d=require('./data.js')
app.get('/api',(req,res)=>
{
res.send(d)
})

app.post('/api',postValidatilmid,(req,res)=>
{
const{error,value}=schema.validate(req.body)
if(error)
{
console.log(error);
return res.send('invalid request...')
}
console.log(req.body)
d.push(req.body)
res.send(201)
})
app.listen(5000,'172.17.12.155',()=>console.log('listening on http://172.17.12.155:5000/api'))
