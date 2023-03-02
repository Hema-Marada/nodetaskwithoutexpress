var express= require('express')
var app=express()
var mysql=require('mysql')
var connection=mysql.createConnection(
    {
        host : '172.17.15.100',
        user : 'itguser10',
        password : 'miracle@10',
        database : 'aar' ,
        
    }
)
connection.connect((err)=>
{
    if(!err)
    {
        console.log("connection established")
    }
    else{
        console.log(err)
    }
})