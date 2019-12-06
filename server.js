const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const suncalc = require('suncalc');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index.ejs')
});

app.get('/moonphase', function(req, res) {
    let moonphase = Math.round(suncalc.getMoonIllumination(new Date()).phase*100)/100;
    res.render('pages/moonphase.ejs', {"moonphaseValue": String(moonphase)});
});

let server = http.listen(PORT, function() {
    console.log(`listening http index.js Port: ${PORT}`);
});