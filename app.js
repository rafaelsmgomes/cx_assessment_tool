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
app.use(express.static(`${__dirname}/PDF`));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'html');
app.engine("html", require("ejs").renderFile);

app.set('views', [path.join(__dirname, "bin_dev"), path.join(__dirname, "PDF")]);

// ------------------------------------------------------------
// SQL CONFIGURATION 
// ------------------------------------------------------------

const conn = mysql.createPool({
    connectionLimit: 100,
    host: "72.10.48.193",
    user: "oracleroot", 
    password: "DBase_0243",
    database: "cx_maturity",
    multipleStatements: true 
}); 

// conn.config.queryFormat = (query, values) => {
//     if (!values) return query;
//     return query.replace(/\:(\w+)/g, (txt, key) => {
//         if (values.hasOwnProperty(key)) {
//             return this.escape(values[key]);
//         }
//         return txt;
//     }.bind(this));
// } 

conn.config.queryFormat = function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this));
};
  

// console.log(state);
let userArr = []; 
let userID;
let ansArr = []

app.get('/cx/maturity', (req, res) => {
    res.render('index'); 
})

app.get('/cx/maturity/pdf/:id', (req, res) => {
    const id = req.params.id;
    res.render('cx_pdf', { userID: id }); 
})

app.post('/api', (req,res) => {
    console.log("----------------------------------------")

    const data      = req.body,
        likerts     = data.likerts, 
        dials       = data.dials,
        vertfcs     = data.vertfcs,
        checkboxes  = data.checkboxes;
        sliders  = data.sliders;

    userID = Date.now();

    console.log(vertfcs);

    createCompany(userArr, data)
    // createFakeCompany(userArr)
    .then(() => {

        likerts.forEach(createAnswersArray);
        dials.forEach(createAnswersArray);
        vertfcs.forEach(createAnswersArray);
        checkboxes.forEach(createAnswersArray);
        sliders.forEach(createAnswersArray); 
        return ('ok')

    }).then((el) => {
        // console.log(el);
        const results = insertAnswers(ansArr);
        return (results);
    })
    .then( (el) => {
        // console.log(el);
        const results = updateAnswers();
        return results

    })
    .then((el) => {
        // console.log(el);
        const results = createOverallResults();
        return results
    })
    .then(el => {
        // console.log(el)
        return ('done')
    })
    .then((el) => {
        // console.log(el)
        res.status(200).json({
            status: 'success',
            results: data.length,
            data: {
                data: 'success'
            }  
        });
        return ('done2');
    })
    .catch((err) => {
        console.log(err)
    });
}); 

app.get('/api2', (req, res) => {

    conn.query(`SELECT * FROM results WHERE user_id = ?`, userID, (err, results) => {
        if (err) throw err;
        const data = results;
        // console.log(results)

        res.send({ 
            data 
        });
    })
})


app.get('/pdfdata', (req, res) => {
 
    conn.query(`SELECT ans_value, question_id, ans_section FROM answers WHERE user_id = ? ORDER BY question_id ASC;
               SELECT companyName, id FROM users WHERE id = ?;
               SELECT BroadcastScore, ResponsiveScore, RelationshipScore, LifecycleScore FROM results WHERE user_id = ?
               `, [1578032137654, 1578032137654, 1578032137654], (err, results) => {
        if (err) throw err; 
        // console.log(results[1][0]);

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
        // console.log(pdfData);
        res.json({data: pdfData});
        // conn.end()
    })    
})
app.get('/pdfdata/:id', (req, res) => {
 
    userID = req.params.id *1;
    console.log(userID);

    conn.query(`SELECT ans_value, question_id, ans_section FROM answers WHERE user_id = ? ORDER BY question_id ASC;
               SELECT companyName, id FROM users WHERE id = ?;
               SELECT BroadcastScore, ResponsiveScore, RelationshipScore, LifecycleScore FROM results WHERE user_id = ?
               `, [userID, userID, userID], (err, results, fields) => {
                // 1577293819790
        if (err) throw err; 
        // console.log(results[1][0]);

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
        // console.log(pdfData);
        res.json({data: pdfData});
        // conn.end()
    })    
})


function createCompany(arr, el) {
    return new Promise( (res, rej) => {
        compName = el.company;
        compSize = el.revenue;
        compIndustry = el.industry;
        numEmployees = el.employees;
        compCountry = el.country;
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

// function createFakeCompany(arr, el) {
//     return new Promise( (res, rej) => {
//         compName = faker.company.companyName();
//         compSize = faker.random.number();
//         compIndustry = faker.company.bs();
//         numEmployees = faker.random.number()/100;
//         compCountry = faker.address.country();
//         arr.push(userID, compName, compSize, compIndustry, numEmployees, compCountry);
//         console.log(arr)
//         conn.query(sql.insertUser, arr, (err, results) => {
//             if(err) throw err;  
//             console.log(results); 
//             userArr = [];
//             res(); 
//         })
//     })
// };

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
            res(results);
        });
    })
}; 

function updateAnswers () {
    return new Promise( (res, rej) => {
        conn.query(sql.updateAnswers, userID, (err, results, fields) => {
            if(err) throw err;
            // console.log(results);
            ansArr = [];
            res(results);
        });
    })
};

function createOverallResults () {
    return new Promise( (res, rej) => {
        conn.query(sql.insertResults, [userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID, userID], (err, results) => {
            if(err) throw err;
            // console.log(results);
            res(results); 
        });
    }) 
};


app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});
