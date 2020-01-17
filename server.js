const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

const app = require('./app');

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Customer Experience Assessment Tool is online")
});