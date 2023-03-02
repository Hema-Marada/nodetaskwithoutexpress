const http=require('http');
 const listen=function(req,res)
 {
    res.send("hello")
 }

 const server=http.createServer(listen)
 {
    console.log("Welcome")
 }


