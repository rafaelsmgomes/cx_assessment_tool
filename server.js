const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config({ path: './config.env'});

const app = require('./app');

// ------------------------------------------------------------
// SQL CONNECTION
// ------------------------------------------------------------

const conn = mysql.createPool({
    connectionLimit: 100,
    host: "72.10.48.193",
    user: process.env.USERNAME, 
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true 
}); 
 

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});