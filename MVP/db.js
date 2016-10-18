var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/2016/09/mvp');

var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: 'string',
  bio: 'string',
  picture: 'string',
  style: 'string'
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;