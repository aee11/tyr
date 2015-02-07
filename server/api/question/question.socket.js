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
  var ownerId = doc.author;
  _.forEach(usersConnected, function (userInfo, userSocketId) { 
    if (ownerId == userInfo.decoded_token._id) {
      console.log(ownerId, userInfo.decoded_token._id);
      console.log(userInfo);
      socket.to(userSocketId).emit('question:save', doc);
    }
  });


  // console.log(usersConnected);
  // socket.emit('question:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('question:remove', doc);
}