const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: String,
  password: String
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
