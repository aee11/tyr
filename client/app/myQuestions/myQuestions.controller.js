'use strict';

angular.module('tyrApp')
  .controller('MyQuestionsCtrl', function ($scope, QuestionFactory, socket) {
    QuestionFactory.questionAPI.getUserQuestions(function(val) {
      $scope.userQuestions = val;
      if ($scope.userQuestions.length > 0) {
        $scope.viewDetails($scope.userQuestions[0]);
      }
      socket.syncUpdates('question', $scope.userQuestions);
    });
    $scope.viewDetails = function (question) {
      console.log($scope.selectedQuestion);
      if ((question.option1.votes + question.option2.votes) > 0) {
        $scope.hasVotes = true;
      } else {
        $scope.hasVotes = false;
      }
      var qIndex = _.findIndex($scope.userQuestions, { '_id': question._id });
      console.log(qIndex);
      $scope.selectedQuestion = $scope.userQuestions[qIndex];
      $scope.labels = [$scope.userQuestions[qIndex].option1.description, $scope.userQuestions[qIndex].option2.description];
      $scope.data = [$scope.userQuestions[qIndex].option1.votes, $scope.userQuestions[qIndex].option2.votes];
      $scope.type = 'Pie';
      $scope.options = { 
        //tooltipTemplate : '<%if (label){%><%=label%>: <%}%><%= value %>%' 
      };
    };
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('question');
    });

  });
