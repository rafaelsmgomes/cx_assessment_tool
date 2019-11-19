const express = require('express'),
      mysql   = require('mysql');

const app = express();

import querie from './schemas/schema_variables';




const con = mysql.createConnection({
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});

con.query(querie, (err, results, fields) => {
    if(err) throw err;
    console.log(results);
});

con.end();
