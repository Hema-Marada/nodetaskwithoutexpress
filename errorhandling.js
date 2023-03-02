const express=require("express");
const app=express()

const getUser=()=> undefined;

app.get("/test",async(req,res)=>
{
    try{
        const user=getUser()
        if(!user)
        {
          throw new Error("User not found")
        }
    }
    catch(error)
    {
return next(error)
    }
 
    return res.status(200).json({success:true})
})

app.post("/test",async(req,res)=>
{
    try{
        const user=getUser()
        if(!user)
        {
          throw new Error("User not found")
        }
    }
    catch(error)
    {
console.log(error)
return res.status(400).send(error.message)
    }
 
    return res.status(200).json({success:true})
})
app.use(errorHandler)

app.listen(2000,()=>{
    console.log("Server is listening on port 2000");
})