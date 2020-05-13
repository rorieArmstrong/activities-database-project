const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const api = require('./routes/api')
const app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
    res.sendFile((path.join(__dirname + '/homepage.html')));
});

app.get('/form', function(req,res){
    res.sendFile((path.join(__dirname + '/index.html')));
});

app.use('/api', api);

app.listen(port, () => {
    console.log('listening on port: '+port)
})