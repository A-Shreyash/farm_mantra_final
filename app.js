const express = require('express');
const cors=require('cors')
const route = require('./route/routing');
const path = require('path');


// body-parser module is responsible for parsing the incoming request body in a middleware.
const bodyParser = require('body-parser');

const port = process.env.PORT || 1000
// app is an instance of express. 
app = express();
// middleware for exposing data on req.body
app.use(bodyParser.urlencoded({extended: true}));
const publicDirPath = path.join(__dirname, 'public');

app.use(express.static(publicDirPath));
app.use(cors({ origin: 'http://localhost:1000', credentials: true }));

// to use static files like css, pics, other assets 

// using routes middleware
app.use('/', route);




app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirPath, 'index.html'));
  });
  

//starting our application @ Port 3000
app.listen(port, (req, res) => 
{
    console.log('All working');
});