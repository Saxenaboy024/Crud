const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employee"
})


db.connect((err) =>{
    if(err) console.log(err.sqlMessage)
    else
    console.log("Database connected")
})
module.exports = db