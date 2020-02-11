const express     = require("express"),
    bodyParser    = require("body-parser"),
    path          = require("path"),
    cors          = require("cors"),
    ejs           = require("ejs"),
    morgan        = require("morgan"),
    dotenv        = require("dotenv");

const app = express();

dotenv.config({ path: './config.env'})

const cxRouter = require("./routes/cxRoutes");

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
};
app.use(express.json()); 
app.use(express.static(`${__dirname}/bin_dev`));
app.use(express.static(`${__dirname}/PDF`));
app.use(express.static(`${__dirname}`)); 
app.use(bodyParser.urlencoded({ extended: true }));


// const whitelist = ['http://oracle.assessment-tools.com', 'https://oracle.assessment-tools.com', 'http://www.oracle.assessment-tools.com', 'https://www.oracle.assessment-tools.com'];
const whitelist = ['http://dev.assessment-tools.com', 'https://dev.assessment-tools.com', 
                   'http://www.dev.assessment-tools.com', 'https://www.dev.assessment-tools.com', 
                   'http://oracle.assessment-tools.com', 'https://oracle.assessment-tools.com', 
                   'http://www.oracle.assessment-tools.com', 'https://www.oracle.assessment-tools.com',
                   'https://cloud.pdfreactor.com', 'http://cloud.pdfreactor.com'
                ];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    allowedHeaders: 'Content-type'
}
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.set('view engine', 'html');
app.engine("html", require("ejs").renderFile);
app.set('views', [path.join(__dirname, "bin_dev"), path.join(__dirname, "PDF")]);


// ROUTING
app.use('/cx/maturity', cxRouter); 


app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server`
    })
})

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})

// SERVER LISTENING
app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});