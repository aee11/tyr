'use strict';

angular.module('tyrApp')
  .controller('MyQuestionsCtrl', function ($scope, QuestionFactory) {
    $scope.userQuestions = QuestionFactory.questionAPI.getUserQuestions();
    console.log($scope.userQuestions);
  });
