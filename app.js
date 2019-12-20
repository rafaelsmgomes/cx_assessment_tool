const express     = require("express"),
    bodyParser    = require("body-parser"),
    faker         = require("faker"),
    mysql         = require("mysql"),
    path          = require("path"),
    ejs           = require("ejs");

const app = express();

const fs      = require("fs");



const sql = require('./database/queries');
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

app.get('/cx/maturity', (req, res) => {
    res.render('index');
})


app.get('/', (req, res) => {
    res.render('homepage');
    let questionsArr = []
    // conn.query(`SELECT * FROM questions`, (err, results) => {
    //     if(err) throw err; 
    //     console.log(results[1]); 
        // for(i = 0; i < results.length; i++){
        //     // userArrID.push(results);
        // };
        // console.log(userArrID); 
        // res.render('/', {name: 'John'})
    // });    
    // conn.release();
});

app.post('/api', (req,res) => {
    console.log("----------------------------------------")
    
    // console.log(req.body);    
    // console.log(`res:${res}`);

    const data      = req.body,
        likerts     = data.likerts, 
        dials       = data.dials,
        vertfcs     = data.vertfcs,
        checkboxes  = data.checkboxes;
        sliders  = data.sliders;


    userID = Date.now();

    createFakeCompany(userArr)
        .then(() => {

            likerts.forEach(createAnswersArray);
            dials.forEach(createAnswersArray);
            vertfcs.forEach(createAnswersArray);
            checkboxes.forEach(createAnswersArray);
            sliders.forEach(createAnswersArray); 

        }).then(() => {

            insertAnswers(ansArr)

        })
        .then( () => {
            updateAnswers();
            createOverallResults();
        });

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
            // console.log(results)
    
            res.send({ 
                data 
            })
        })
    }, 1000);
})

app.get('/pdf', (req, res) => {

    conn.query(`SELECT ans_value, question_id, ans_section FROM answers WHERE user_id = ? ORDER BY question_id ASC;
               SELECT companyName, id FROM users WHERE id = ?;
               SELECT BroadcastScore, ResponsiveScore, RelationshipScore, LifecycleScore FROM results WHERE user_id = ?
               `, [1576786383648, 1576786383648, 1576786383648], (err, results, fields) => {
        if (err) throw err; 
        console.log(results[1][0]);

        var pdfData = {

            TotalScore: Math.round((results[2][0].BroadcastScore + results[2][0].ResponsiveScore + results[2][0].RelationshipScore + results[2][0].LifecycleScore)/4),
            
            BroadcastScore: results[2][0].BroadcastScore,
            ResponsiveScore: results[2][0].ResponsiveScore,
            RelationshipScore: results[2][0].RelationshipScore,
            LifecycleScore: results[2][0].LifecycleScore,

            companyName: results[1][0].companyName,
            companyID: results[1][0].id,

            broadcast_1: results[0][0].ans_value,
            broadcast_2: results[0][1].ans_value,
            broadcast_3: results[0][2].ans_value,
            broadcast_4: results[0][3].ans_value,
            broadcast_5: results[0][4].ans_value,
    
            responsive_1: results[0][9].ans_value,
            responsive_2: results[0][10].ans_value,
            responsive_3: results[0][11].ans_value,
            responsive_4: results[0][12].ans_value,
            responsive_5: results[0][13].ans_value,
            responsive_6: results[0][14].ans_value,
            responsive_7: results[0][15].ans_value,
            responsive_8: results[0][16].ans_value,
            responsive_9: results[0][17].ans_value,
            responsive_10: results[0][18].ans_value,
    
            relationship_1: results[0][19].ans_value,
            relationship_2: results[0][20].ans_value,
            relationship_3: results[0][21].ans_value,
            relationship_4: results[0][22].ans_value,
            relationship_5: results[0][23].ans_value,
            relationship_6: results[0][24].ans_value,
            relationship_7: results[0][25].ans_value,
            relationship_8: results[0][26].ans_value,
            relationship_9: results[0][27].ans_value,
            relationship_10: results[0][28].ans_value,
            relationship_11: results[0][29].ans_value,
            relationship_12: results[0][30].ans_value,
            relationship_13: results[0][31].ans_value,
    
            lifecycle_1: results[0][32].ans_value,
            lifecycle_2: results[0][33].ans_value,
            lifecycle_3: results[0][34].ans_value,
            lifecycle_4: results[0][35].ans_value,
            lifecycle_5: results[0][36].ans_value,
            lifecycle_6: results[0][37].ans_value,
            lifecycle_7: results[0][38].ans_value,
            lifecycle_8: results[0][39].ans_value
        }
        
        console.log(pdfData);
        


        // --------------------------------------------------------------------------------------------------------------
        // CREATING ARRAY OF VARIABLES FOR PDF (Simplest way possible)
        // --------------------------------------------------------------------------------------------------------------
        
        // var broadcast_1 = results

        // --------------------------------------------------------------------------------------------------------------
        // CREATING ARRAY OF VARIABLES FOR PDF (MAKING IT MORE DYNAMIC)

        // results.forEach((el, index) => {
        //     if(el[0].ans_section === 'Broadcast') {
        //         pdfData[`broadcast_${index}`] = el.ans_value
        //     }
        //     // console.log(el.ans_section)
        // })
        // console.log(pdfData)
        
        // --------------------------------------------------------------------------------------------------------------
        

        res.send({
            data: pdfData
        })

    })    
})


function createFakeCompany(arr) {
    return new Promise( (res, rej) => {
        compName = faker.company.companyName();
        compSize = faker.random.number();
        compIndustry = faker.company.bs();
        numEmployees = faker.random.number()/100;
        compCountry = faker.address.country();
        arr.push(userID, compName, compSize, compIndustry, numEmployees, compCountry);
        console.log(arr)
        conn.query(sql.insertUser, arr, (err, results) => {
            if(err) throw err;  
            console.log(results); 
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


app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});
