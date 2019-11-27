const express = require("express"),
mysql         = require("mysql");
const fs      = require("fs");

const app     = express();


const sql = require('./src/js/database/queries');

app.use(express.json());
app.use(express.static(`${__dirname}/bin_dev`));

const con = mysql.createConnection({
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});




con.end();
app.listen(3000 || process.env.PORT, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});




// app.use(express.static('src/js'));

// con.query( sql.questionSchema , (err, results, fields) => {
//     if(err) throw err;
//     console.log(results);
// });

// console.log(sql.questionSchema);

// app.get('/', (req, res) => {
//     res.send("Let's see if this is running")
// })
