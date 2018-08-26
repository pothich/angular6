const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const http = require('http');
const app = express();
var session = require('express-session');
var passport = require('passport');
var logger = require("./shared/lib/logger");
var requestLogger = require("./shared/lib/requestLogger");
const expressRequestId = require('express-request-id')();
//app.use(expressRequestId);

var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function(file) {
    require(models_path + '/' + file);
});

//use passport session

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

 
app.use(passport.initialize());
app.use(passport.session());

//bootstrap passport config
require('./config/passport')(passport);



// API file for interacting with MongoDB
const api = require('./routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../dist/myapp/')));
app.use(requestLogger);
// API location
app.use('/api', api);

app.use(function(req, res, next){
   // debugger;
    logger.error('404 page requested');
    res.status(404).send('This page does not exist!');
});


app.use((error,req,res,nest)=>{
   /* if(res.headerSent){
        return next(error);
    }
    */
    logger.error(error);
    res.status(500).send("500 error!");
});


//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => logger.info(`Running on localhost:${port}`));