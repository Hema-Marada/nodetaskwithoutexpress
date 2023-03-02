const joi=require('joi')
const schema=joi.object({
    sno:joi.number().integer().max(10),
    fname:joi.string().max(10).required(),
    lname:joi.string().max(10).required(),
    email:joi.string().max(20).required()
    })
    const postValidatilmid = async (req, res, next)=>{
        let value = schema.validate(req.body)
    
        if(value.error){
            console.log("invalid data");
        }else{
            next()
        }
    }
    module.exports=postValidatilmid;