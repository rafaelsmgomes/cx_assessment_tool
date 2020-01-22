const express     = require("express"),
    bodyParser    = require("body-parser"),
    path          = require("path"),
    mysql         = require("mysql"),
    ejs           = require("ejs");

const dotenv = require('dotenv');

dotenv.config({ path: './config.env'});

const app = express();

const cxRouter = require('./routes/cxRoutes');


app.use(express.json());
app.use(express.static(`${__dirname}/bin_dev`));
app.use(express.static(`${__dirname}/PDF`));
app.use(express.static(`${__dirname}`)); 
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'html');
app.engine("html", require("ejs").renderFile);

app.set('views', [path.join(__dirname, "bin_dev"), path.join(__dirname, "PDF")]);

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

// ROUTE
app.use('/cx/maturity', cxRouter);

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});

module.exports = app;
