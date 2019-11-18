const express = require('express'),
      mysql   = require('mysql');

const app = express();

const con = mysql.createConnection({
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});

con.query('CREATE TABLE question_schema ( question_id INT )', (err, results, fields) => {
    if(err) throw err;
    console.log(results);
});

con.end();
