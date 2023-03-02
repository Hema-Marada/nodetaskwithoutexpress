var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '172.17.15.100', // Replace with your host name
  user: 'itguser10',      // Replace with your database username
  password: 'miracle@10',      // Replace with your database password
  database: 'poctask' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;