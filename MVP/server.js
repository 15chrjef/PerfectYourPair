var express = require('express');
var parser = require('body-parser');
var Profile = require('./db.js');
var app = express();
var port = process.env.PORT || 8000;

app.use(parser.json());
app.use(express.static(__dirname + '/src/client/'));

app.get('/api/:*', function(req, res) {
  var style = req.params['0'];

  Profile.find({style: style}, function(err, profiles) {
    if (err) {
      console.log(err);
      return res.sendStatus(404);
    }
    res.send(profiles);
  });
});

app.get('/api', function(req, res) {
  Profile.find(function(err, profiles) {
    if (err) {
      console.log(err);
      return res.sendStatus(404);
    }
    res.send(profiles);
  });
});


app.post('/api', function(req, res) {
  var name = req.body.name;
  var bio = req.body.bio;
  var picture = req.body.picture;
  var style = req.body.style;
  var profile = new Profile({
    name: name,
    bio: bio,
    picture: picture,
    style: style
  });

  profile.save(function(err, response) {
    if (err) {
      return console.log(err);
    }
    res.send(response);
  });
});

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/src/client/index.html');
});

app.listen(port, function() {
  console.log('listening on port 8000');
});