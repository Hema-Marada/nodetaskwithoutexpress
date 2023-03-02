const EventEmitter = require('events')
const http = require('http')

class Shopping extends EventEmitter {
    constructor(){
        super()
    }
}

let myEmitter = new Shopping()

myEmitter.on('orders', ()=>{
    console.log('Order Placed');
})

myEmitter.on('orders', (data)=>{
    console.log(`${data} orders placed`);
})

myEmitter.emit('orders', 2)


const server = http.createServer()

server.on('request', ()=>{
    console.log('hits the server');
})

server.on('request', ()=>{
    console.log('hits the server again');
})

server.listen(3000, ()=>{
    console.log('connected to port 3000');
})