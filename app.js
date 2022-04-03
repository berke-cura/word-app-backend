const express = require('express');
const cors = require('cors')

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

const mainRoute = require('./api/routes/main');

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.status(200).json({"message" : "ok"})
})

app.use('/', mainRoute)

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;