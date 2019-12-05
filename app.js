const express     = require("express"),
    bodyParser    = require("body-parser"),
    faker         = require("faker"),
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
 
const conn = mysql.createPool({
    connectionLimit: 100,
    host: "72.10.48.193",
    user: "root",
    password: "DBase_0243",
    database: "test_1"
});

// console.log(state);
let userArr = [];
let userID;

app.get('/', (req, res) => {
    res.render('homepage');
    let userArrID = []
    conn.query(`SELECT * FROM users`, (err, results) => {
        for(i = 0; i < results.length; i++){
            userArrID.push(results[i].id);
        };
        console.log(userArrID);
    });    
    conn.release();
});

app.post('/api', (req,res) => {
    console.log("----------------------------------------")
    
    const data = req.body;

    let userID = Date.now();
    userArr.push(userID);

    createFakeCompany(userArr);

    data.likerts.forEach(getAnswers);
    data.dials.forEach(getAnswers);
    data.vertfcs.forEach(getAnswers);
    data.checkboxes.forEach(getAnswers);


    res.status(200).json({
        status: 'success',
        results: data.length,
        data: {
            data
        }
    });
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


function getAnswers(el) {
    let ansRow = [];

    userID = userID;
    questionID = el.id;
    value = el.val;
    textAns = el.textArr;

    ansRow.push(userID, questionID, value, `${textAns}`);
    // console.log(ansRow);
    conn.query(sql.insertAnswer, ansRow, (err, results) => {
        if(err) throw err;
        // console.log(results)
        // conn.release();
    });
}; 

function createFakeCompany(arr) {
    compName = faker.company.companyName();
    compSize = faker.random.number();
    compIndustry = faker.company.bs();
    numEmployees = faker.random.number()/100;
    compCountry = faker.address.country();
    arr.push(compName, compSize, compIndustry, numEmployees, compCountry);
    console.log(arr)
    conn.query(sql.insertUser, arr, (err, results) => {
        if(err) throw err;  
        console.log(results); 
        // conn.release();
    })
}

app.listen(3000 || process.env.PORT, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});
