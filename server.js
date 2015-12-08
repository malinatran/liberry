// =====================================
// Req'ts
// =====================================
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var md5 = require('md5');
var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

// =====================================
// Listener
// =====================================
app.listen(port);

// =====================================
// Models
// =====================================
var Berry = require('./models/berry.js');

// =====================================
// Middleware
// =====================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());

// =====================================
// Database
// =====================================
mongoose.connect('mongodb://localhost/liberry');

// =====================================
// Routes
// =====================================
app.get('/berries', function(req, res) {
  Berry.find().then(function(berries) {
    res.send(berries);
  });
});

app.post('/berries', function(req, res) {
  var berry = new Berry(req.body);
  berry.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send(berry);
    }
  });
});

app.put('/berries/:id', function(req, res) {
  Berry.findOneAndUpdate({
    _id: req.params.id
  }, {
    category: req.body.category, title: req.body.title, author: req.body.author, tags: req.body.tags, reference: req.body.reference, imgurl: req.body.imgurl, URL: req.body.URL
  }, function(err, berry) {
    if (err) {
      console.log(err)
    } else {
      res.send(berry);
    }
  });
});

app.delete('/berries/:id', function(req, res) {
  Berry.findOneAndRemove( { _id: req.params.id }, function(err, berry) {
    if (err) {
      console.log(err);
    }
    console.log('deleted');
    res.send(berry);
  });
});




