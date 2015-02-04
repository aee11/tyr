'use strict';

angular.module('tyrApp')
  .controller('MyQuestionsCtrl', function ($scope, QuestionFactory, socket) {
    QuestionFactory.questionAPI.getUserQuestions(function(val) {
      $scope.userQuestions = val;
      socket.syncUpdates('question', $scope.userQuestions);
    });
    $scope.viewDetails = function (question) {
      $scope.selectedQuestion = question;
      $scope.labels = [question.option1.description, question.option2.description];
      $scope.data = [question.option1.votes, question.option2.votes];
      $scope.type = 'Pie';
      $scope.options = { scaleLabel : '<%= value + '%' %>' };
    };
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('question');
    });
  });
