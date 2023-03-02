var { createPool } = require("mysql2");
// var sq=require('sequelize')
require("dotenv").config();
var pool = createPool({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});
function getEmployee() {
  return new Promise((resolve, reject) => {
    pool.query(`select * from employee.empdata`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}
function addEmployee(s, f, l, e) {
  return new Promise((resolve, reject) => {
    pool.query(
      `insert into employee.empdata(sno,fname,lname,email) values(?,?,?,?)`,
      [s, f, l, e],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
}
function updateEmployee(f, l, e, s) {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE empdata SET fname=?,lname=?,email=? WHERE sno=?`,
      [f, l, e, s],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
}
function deleteEmployee(sno) {
  return new Promise((resolve, reject) => {
    pool.query(`delete from empdata where sno=?`, [sno], (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}
function Deletetable() {
  return new Promise((resolve, reject) => {
    pool.query(`delete from empdata`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}
getEmployee();
addEmployee();
updateEmployee();
deleteEmployee();
Deletetable();

// pool.end();
module.exports = {
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  Deletetable,
};
