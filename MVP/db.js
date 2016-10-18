var mongoose = require('mongoose');

mongoose.connect('mongodb://eljefe:theboss@ds029665.mlab.com:29665/perfectyourpair');
//eljefe
//theboss
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: 'string',
  bio: 'string',
  picture: 'string',
  style: 'string'
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;