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
      }
    });

    var updateQuestionCards = function(questions) {
      angular.forEach(questions, function (value, key) {
        if (value.seen) {
          value.discarded = true;
        }
      });
    };

    // Public API here
    return {
      questionAPI: questionAPI,
      updateQuestionCards: updateQuestionCards
    };
  });
