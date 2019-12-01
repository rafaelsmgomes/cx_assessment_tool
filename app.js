const express = require("express"),
mysql         = require("mysql"),
path          = require("path"),
ejs           = require("ejs");

const app = express();

const fs      = require("fs");



const sql = require('./src/js/database/queries');

app.use(express.json());
app.use(express.static(`${__dirname}/bin_dev`));

app.set('views', path.join(__dirname, 'bin_dev')); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
 
const conn = mysql.createConnection({
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});

app.get('/', (req, res) => {
    // var sqlCode = `SELECT * FROM questions`;
    conn.query("SELECT * FROM `questions`", (err, results) => {
        if(err) throw err;
        console.log(results);

    });
    res.render('homepage');
    conn.end();
});

app.get('/pdf', (req,res) => {
    conn.query("SELECT * FROM `questions`", (err, results) => {
        if(err) throw err;
        console.log(results);
    });
    res.render('pdf');
});

/**
 * CREATE ALL SCHEMAS
 */

//     con.query( sql.userSchema, (err, results, fields) => {
//         if(err) throw err;
//         console.log(results);
//     });
//     con.query( sql.questionSchema, (err, results, fields) => {
//         if(err) throw err;
//         console.log(results);
//     });
//     con.query( sql.answersSchema, (err, results, fields) => {
//         if(err) throw err;
//         console.log(results);
//     });
//     con.query( sql.resultsSchema, (err, results, fields) => {
//         if(err) throw err;
//         console.log(results);
// });





app.listen(3000 || process.env.PORT, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});
