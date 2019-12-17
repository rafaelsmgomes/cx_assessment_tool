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
    password: "Fael_0243",
    database: "test_1",
    multipleStatements: true
});

// console.log(state);
let userArr = []; 
let userID;
let ansArr = []


app.get('/', (req, res) => {
    res.render('homepage');
    let questionsArr = []
    conn.query(`SELECT * FROM questions`, (err, results) => {
        if(err) throw err; 
        console.log(results[1]); 
        // for(i = 0; i < results.length; i++){
        //     // userArrID.push(results);
        // };
        // console.log(userArrID); 
        res.render('/', {name: 'John'})
    });    
    // conn.release();
});

app.post('/api', (req,res) => {
    console.log("----------------------------------------")
    
    console.log(req.body);    
    // console.log(`res:${res}`);

    const data      = req.body,
        likerts     = data.likerts, 
        dials       = data.dials,
        vertfcs     = data.vertfcs,
        checkboxes  = data.checkboxes;
        sliders  = data.sliders;


    userID = Date.now();
    // userArr.push(userID); 
    // createFakeCompany(userArr)
    //     .then(() => {

    //         likerts.forEach(createAnswersArray);
    //         dials.forEach(createAnswersArray);
    //         vertfcs.forEach(createAnswersArray);
    //         checkboxes.forEach(createAnswersArray);
    //         sliders.forEach(createAnswersArray); 

    //     }).then(() => {

    //         insertAnswers(ansArr)

    //     })
    //     .then( () => {
    //         updateAnswers();
    //         createOverallResults();
    //     });

    res.status(200).json({
        status: 'success',
        results: data.length,
        data: {
            data
        }  
    });
}); 

app.get('/api2', (req, res) => {

    setTimeout(() => {        
        conn.query(`SELECT * FROM results WHERE user_id = ?`, userID, (err, results) => {
            if (err) throw err;
            const data = results;
            console.log(results)
    
            res.send({ 
                data
            })
        })
    }, 2000);
})


function createFakeCompany(arr) {
    return new Promise( (res, rej) => {
        compName = faker.company.companyName();
        compSize = faker.random.number();
        compIndustry = faker.company.bs();
        numEmployees = faker.random.number()/100;
        compCountry = faker.address.country();
        arr.push(userID, compName, compSize, compIndustry, numEmployees, compCountry);
        // console.log(arr)
        conn.query(sql.insertUser, arr, (err, results) => {
            if(err) throw err;  
            // console.log(results); 
            userArr = [];
            res(); 
        })
    })
};

function createAnswersArray(el) { 
    return new Promise( (res, rej) => {
        let ansRow = [];

        questionID = el.id;
        value = el.val;
        textAns = el.choseAns;
        ansRow.push(userID, questionID, value, `${textAns}`); 
        ansArr.push(ansRow);

        res();
    })
};  

function insertAnswers(elem) { 
    return new Promise( (res, rej) => {

        conn.query(sql.insertAnswer, [elem], (err, results) => {
            // console.log(results);
            if(err) throw err;
        });
        res();
    })
}; 

function updateAnswers () {
    return new Promise( (res, rej) => {
        conn.query(sql.updateAnswers, userID, (err, results, fields) => {
            if(err) throw err;
            // console.log(results);
            ansArr = [];
            res();
        });
    })
};

function createOverallResults () {
    return new Promise( (res, rej) => {
        conn.query(sql.insertResults, [userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID], (err, results, fields) => {
            if(err) throw err;
            // console.log(results);
            res(); 
        });
    }) 
};




app.listen(3000 || process.env.PORT, process.env.IP, () => {
    // console.log("Customer Experience Assessment Tool is online")
});
