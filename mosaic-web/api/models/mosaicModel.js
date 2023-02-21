'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var UserSchema = new Schema({
  userName: {
    type: String,
    require: "Must provide userName"
  },
  email: {
    type: String,
    require: "Must provide email"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    require: "Must provide password"
  }
})

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model("Users", UserSchema)