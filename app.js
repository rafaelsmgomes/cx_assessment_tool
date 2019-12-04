const express     = require("express"),
    bodyParser    = require("body-parser")
    mysql         = require("mysql"),
    path          = require("path"),
    ejs           = require("ejs");

const app = express();

const fs      = require("fs");



const sql = require('./src/js/database/queries');
// const state = require('./src/js/state');

app.use(express.json());
app.use(express.static(`${__dirname}/bin_dev`));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'bin_dev')); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
 
const conn = mysql.createConnection({
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});

// console.log(state);


app.get('/', (req, res) => {
    res.render('homepage');
    let userArrID = []
    conn.query(`SELECT id FROM users`, (err, results) => {
        for(i = 0; i < results.length; i++){
            userArrID.push(results[i].id);
        };
        console.log(userArrID);
    });    
    conn.end();
});

app.post('/api', (req,res) => {
    console.log("----------------------------------------")
    console.log("----------------------------------------")
    const data = req.body;
    // data.dials.forEach()
    // console.log(data);
    let questionsIdArray = [],
    valueArray = [],
    userArr = [],
    textArr = [];

    let userID = 2;
    let dialsAnsArr = [];
    data.dials.forEach(el => {
        let dialAnsRow = [];

        questionID = el.id;
        value = el.val;
        textAns = el.textArr;

        dialAnsRow.push(userID, questionID, value, `${textAns}`);
        dialsAnsArr.push(dialAnsRow);

        console.log(dialAnsRow);

        conn.query(sql.insertAnswer, dialAnsRow, (err, results) => {
            if(err) throw err;
            console.log(results)
        });
    });

    conn.end();
    res.status(200).json({
        status: 'success',
        results: data.length,
        data: {
            data
        }
    });
});

// app.post('/pdf', (req,res) => {
//     console.log("----------------------------------------")
//     console.log("----------------------------------------")
//     // console.log(req);
//     console.log("----------------------------------------")
//     // console.log(res);
//     res.json(res);
//     // console.log(body);
//     res.redirect('pdf')
// });

app.get('/pdf', (req,res) => {
    conn.query("SELECT * FROM `questions`", (err, results) => {
        if(err) throw err;
        console.log(results);
        conn.end();
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
