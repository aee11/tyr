/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var _ = require('lodash');
var Question = require('./question.model');

exports.register = function(socket, usersConnected) {
  Question.schema.post('save', function (doc) {
    onSave(socket, usersConnected, doc);
  });
  Question.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, usersConnected, doc, cb) {
  console.log("onSave cal");
  var ownerId = doc._id;
  _.forEach(usersConnected, function (userInfo, userSocketId) { 
    console.log(userInfo.decoded_token); 
  });

  var test = {
    '1234': {
      decoded_token: {
        _id: '4567'
      }
    }
  }
  console.log(_.result(_.findWhere(usersConnected, { 'decoded_token._id': ownerId })));

  //console.log(usersConnected);
  socket.emit('question:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('question:remove', doc);
}