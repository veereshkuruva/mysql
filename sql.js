const mysql = require('mysql2');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"7676023599@surya",
    database:"crud",
    insecureAuth : true
});

connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else
    console.log(err);
})

module.exports= connection;