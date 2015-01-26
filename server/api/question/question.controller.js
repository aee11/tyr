'use strict';

var _ = require('lodash');
var Question = require('./question.model');
var User = require('../user/user.model');

// Get list of questions
exports.index = function(req, res) {
  if (req.query.batch) {
    Question.find().limit(20).exec(function (err, questions) {
      if(err) { return handleError(res, err); }
      return res.json(200, questions);
    });
  } else {
    Question.find(function (err, questions) {
      if(err) { return handleError(res, err); }
      return res.json(200, questions);
    });
  }
};

// Get a single question
exports.show = function(req, res) {
  Question.findById(req.params.id, function (err, question) {
    if(err) { return handleError(res, err); }
    if(!question) { return res.send(404); }
    return res.json(question);
  });
};

// Get all of the users questions
exports.getMyQuestions = function(req, res) {
  console.log('Getting user questions...');
  User.findById(req.user._id, function (err, user) {
    if(err) { return handleError(res, err); }
    User.populate(user, { path: 'questions' }, function (err, user) {
      if(err) { return handleError(res, err); }
      return res.json(200, user.questions);
    });
  });
};

// Creates a new question in the DB.
exports.create = function(req, res) {
  Question.create({
    author: req.user._id,
    question: req.body.question,
    option1: {
      description: req.body.option1,
      votes: 0
    },
    option2: {
      description: req.body.option2,
      votes: 0
    },
    views: 0
  }, function(err, question) {
    if(err) { return handleError(res, err); }
    User.findByIdAndUpdate(req.user._id, 
      { $push: { questions: question._id } }, function(err) {
        if (err) { return handleError(res, err); }
        return res.json(201, question);
    });
  });
};

// Updates an existing question in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Question.findById(req.params.id, function (err, question) {
    if (err) { return handleError(res, err); }
    if(!question) { return res.send(404); }
    var updated = _.merge(question, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, question);
    });
  });
};

// Deletes a question from the DB.
exports.destroy = function(req, res) {
  Question.findById(req.params.id, function (err, question) {
    if(err) { return handleError(res, err); }
    if(!question) { return res.send(404); }
    question.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}