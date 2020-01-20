const express     = require("express"),
    bodyParser    = require("body-parser"),
    path          = require("path"),
    ejs           = require("ejs");

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


// ROUTE
app.use('/cx/maturity', cxRouter);

module.exports = app;