const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const api = require('./server/routes/api');
const port = 4200;



//going to join the path of the current directory with the dist express access to distributable folder
app.use(express.static(path.join(__dirname, 'dist/ngPlayer')));

//this basically passes the text as url encoded data
app.use(bodyParser.urlencoded({extended: false}));

//create application/json parser
app.use(bodyParser.json());
//app.use(express.json());

app.use('/api',api);

app.use((req,res)=>{
   res.setHeader('Content-Type', 'application/json')
   });
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/ngPlayer/index.html'));
});

//app.post('/', function(req,res){
//    console.log('Post a video....');
//    console.log("bodyof post request"+req.body.title);
//    res.json("video posted.....");
//});

app.listen(port,function(){
    console.log("server running on localhost:"+port);
    });