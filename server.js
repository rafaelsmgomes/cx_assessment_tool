const express     = require("express"),
    bodyParser    = require("body-parser"),
    path          = require("path"),
    cors          = require("cors"),
    ejs           = require("ejs"),
    dotenv        = require("dotenv"),
    fs            = require("fs"); 

const app = express();

dotenv.config({ path: './config.env'})

const cxRouter = require("./routes/cxRoutes");

const PDFReactor = require('../PDFreactor/wrappers/nodejs/lib/PDFreactor');
const pdfReactor = new PDFReactor("http://ec2-34-216-255-36.us-west-2.compute.amazonaws.com/service/rest");

app.use(express.json()); 
app.use(express.static(`${__dirname}/bin_dev`));
app.use(express.static(`${__dirname}/PDF`));
app.use(express.static(`${__dirname}`)); 
app.use(bodyParser.urlencoded({ extended: true }));

// const whitelist = ['http://oracle.assessment-tools.com', 'https://oracle.assessment-tools.com', 'http://www.oracle.assessment-tools.com', 'https://www.oracle.assessment-tools.com'];
const whitelist = ['http://dev.assessment-tools.com', 'https://dev.assessment-tools.com', 'http://www.dev.assessment-tools.com', 'https://www.dev.assessment-tools.com'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    // allowedHeaders: 'Content-type'
}
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.set('view engine', 'html');
app.engine("html", require("ejs").renderFile);
app.set('views', [path.join(__dirname, "bin_dev"), path.join(__dirname, "PDF")]);


// ROUTING
app.use('/cx/maturity', cxRouter); 


app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});