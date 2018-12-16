const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const request = require('request');
//app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('dist'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.post('/login', function(req, res) {
    var options = {
        uri : 'http://10.176.5.11:9091/users/login',
        method : 'POST',
        json: true,
        headers: req.headers || {},
        body: req.body
    }; 
    callAPI(options, req, res)

})
app.post('/patient/login', function(req, res) {
    var options = {
        uri : 'http://10.176.5.11:9091/patient/login',
        method : 'POST',
        json: true,
        headers: req.headers || {},
        body: req.body
    }; 
    callAPI(options, req, res)

})
app.post('/survey/getSurvey', function(req, res) {
   console.log(req.body);
   var options = {
        uri : 'http://10.176.5.11:9091/survey/getSurvey/'+req.body.id,
        method : 'GET',
        json: true,
        headers: req.headers || {},
        body: {}
    }; 
    callAPI(options, req, res)

})
app.post('/survey/submitSurvey', function(req, res) {
   console.log(req.body);
   var options = {
        uri : 'http://10.176.5.11:9091/survey/submitSurvey',
        method : 'POST',
        json: true,
        headers: req.headers || {},
        body: req.body
    }; 
    callAPI(options, req, res)

})
app.post('/patient/register', function(req, res) {
    var options = {
        uri : 'http://10.176.5.11:9091/patient/register',
        method : 'POST',
        json: true,
        headers: req.headers || {},
        body: req.body
    }; 
    callAPI(options, req, res)

})
app.post('/patient', function(req, res) {
    var options = {
        uri : 'http://10.176.5.11:9091/patient',
        method : 'GET',
        json: true,
        headers: req.headers || {},
        body: req.body
    }; 
    callAPI(options, req, res)

})
function callAPI(options, req, res){
     request(options, function (error, response, body) {
            //console.log(error);
            //console.log(response);
            
            if (error) {
                res.send(JSON.stringify(error))
            } else {
                let json = JSON.stringify(response.body);
                res.send(json)
            }
        });
}
    

//app.get('/ping', function (req, res) {
// return res.send('pong');
//});
//
//app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});

//app.listen(process.env.PORT || 8080);
app.listen(8080, () => console.log('Listening on port 8080!'));