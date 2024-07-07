var mysqlobj = require('mysql2');
var con = mysqlobj.createConnection({
    host:"localhost",
    user:"root",
    password:"Geet@1234",
    database:"project"
});
con.connect(function(err){
    if(err)
    throw err;
});
module.exports = con;