const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
//app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('dist'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
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