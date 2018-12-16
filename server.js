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
            uri : 'http://10.176.8.11:7071/users/login',
            method : 'POST',
            json: true,
            headers: req.headers || {},
            body: req.body
        }; 
        request(options, function (error, response, body) {
            console.log(error);
            console.log(response);
            
            if (error) {
                res.send(JSON.stringify(error))
            } else {
                let json = JSON.stringify(response.body);
                res.send(json)
            }
        });
    
//        let serviceRequest = {
//            method: 'POST',
//            path: 'http://10.176.8.11:7071/users/login',
//            json: true,
//            headers: req.headers || {},
//            payload: req.body
//        };
//        request(serviceRequest, function (error, response, body) {
//            console.log(response);
//            console.log(error);
//            if (!error && response.statusCode == 200) {
//                res = body;
//            }
//            else {
//                res = 'Not Found';
//            }
//        });

})
    

//app.get('/ping', function (req, res) {
// return res.send('pong');
//});
//
//app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});

//app.listen(process.env.PORT || 8080);
app.listen(8080, () => console.log('Listening on port 8080!'));