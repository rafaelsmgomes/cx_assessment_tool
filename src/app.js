const sql = require('./js/SQL/queries');

const express = require('express'),
      mysql   = require('mysql');

const app = express();

const con = mysql.createConnection({
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});

// con.query( sql.questionSchema , (err, results, fields) => {
//     if(err) throw err;
//     console.log(results);
// });

console.log(sql.questionSchema);

con.end();


