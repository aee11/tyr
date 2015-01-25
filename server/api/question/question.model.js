'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  question: String,
  option1: {
    description: String,
    votes: Number
  },
  option2: {
    description: String,
    votes: Number
  },
  added: {type: Date, default: Date.now},
  lastViewed: {type: Date},
  lastAnswered: {type: Date}, 
  views: Number
});

module.exports = mongoose.model('Question', QuestionSchema);