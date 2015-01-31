'use strict';

angular.module('tyrApp')
  .factory('QuestionFactory', function ($resource) {

    var questionAPI = $resource('/api/questions/:id', null, {
      getNewQuestionBatch: {
        method: 'GET',
        isArray: true,
        params: {
          batch: true
        }
      },
      getUserQuestions: {
        method: 'GET',
        isArray: true,
        params: {
          id: 'me'
        }
      },
      incrementVotesAndViews: {
        method: 'PUT',
        params: {
          id: 'inc'
        }
      }
    });

    var updateQuestionCards = function(questions) {
      var questionsToUpdate = { incView: [], incVote: {id: "", answer: ""}};
      angular.forEach(questions, function (value, key) {
        if (value.seen) {
          value.discarded = true;
          if (!value.viewCountIncremented) {
            value.viewCountIncremented = true;
            questionsToUpdate.incView.push(value._id);
            if (value.answer) {
              questionsToUpdate.incVote.id = value._id;
              questionsToUpdate.incVote.answer = value.answer;
            }
          }
        }
      });
      questionAPI.incrementVotesAndViews(questionsToUpdate);
    };

    // Public API here
    return {
      questionAPI: questionAPI,
      updateQuestionCards: updateQuestionCards
    };
  });
