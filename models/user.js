'use strict';

var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
    email   : String,
    password: String
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);