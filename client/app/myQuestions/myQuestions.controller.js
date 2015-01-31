'use strict';

angular.module('tyrApp')
  .controller('MyQuestionsCtrl', function ($scope, QuestionFactory) {
    $scope.userQuestions = QuestionFactory.questionAPI.getUserQuestions();
    $scope.viewDetails = function (question) {
      $scope.selectedQuestion = question;
      $scope.labels = [question.option1.description, question.option2.description];
      $scope.data = [question.option1.votes, question.option2.votes];
      $scope.type = 'Pie';
      $scope.options = { scaleLabel : "<%= value + '%' %>" };
    };
  });
