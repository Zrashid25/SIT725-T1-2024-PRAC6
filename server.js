var express = require('express');
var app = express();
require('./dbConnection');
let router = require('./routes/routes.js');

app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log('App listening to: ' + port);
});

//app.listen(3000, ()=>{
 //   console.log('test');
 //   connect ();
//});