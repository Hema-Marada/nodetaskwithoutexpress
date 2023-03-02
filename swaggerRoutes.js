const express = require('express')
const app = express()

module.exports = routes = ()=>{
    app.get('/employees', (req, res)=>{
        res.send('Got data')
    })
}