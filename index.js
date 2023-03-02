var cron = require('node-cron');
const connection = require('./database/orders.js')

connection.connect((err)=>{
    if(err) console.log(err);
    console.log('database connected succesfully');
})
let a=cron.schedule('*/2 * * * * *', () => {
    connection.query('update orders set order_amount=order_amount+100')
  });
  a.stop();
  






// const { Console } = require('console');
// const v = require('./variable.js')
// const fs=require('fs')
// console.log(v.name);
// console.log(v.sum(12,10));
// console.log(v.num)

// fs.readFile('C:\\Users\\hmarada\\nodePractice\\text.txt','utf8',(err,d)=>
// {
// if(err)console.log(err)
// console.log(d)
// })
// require('./add')
// let d1=fs.readFileSync(__dirname+'\\text.txt', 'utf8')
// console.log(d1)
// require('./server')


