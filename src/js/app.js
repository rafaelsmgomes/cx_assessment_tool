const sql = require('./SQL/queries');

const express = require('express'),
      mysql   = require('mysql');

const app = express();

const con = mysql.createConnection({
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});

con.query( sql.userSchema , (err, results, fields) => {
    if(err) throw err;
    console.log(results);
});

console.log(sql.userSchema);

con.end();
