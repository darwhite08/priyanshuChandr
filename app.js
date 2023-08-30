const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express() ;
const port =  process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    // Rendering home.ejs page
    res.render('main');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))