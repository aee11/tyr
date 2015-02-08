'use strict';

angular.module('tyrApp')
  .controller('MainCtrl', function ($scope, $http, socket, $mdDialog, $mdToast, $animate, QuestionFactory) {
    $scope.showQuestionDialog = function(ev) {
      $scope.newQuestion = {};
      $mdDialog.show({
        controller: 'NewQuestionDialogCtrl',
        templateUrl: 'components/ngTemplates/newQuestionDialog/newQuestionDialog.html',
        targetEvent: ev,
      })
      .then(function (question) { // question submitted
        QuestionFactory.questionAPI.save({
          question: question.question,
          option1: question.option1,
          option2: question.option2
        }, function () {
          $mdToast.show({
            controller: 'NewQuestionToastCtrl',
            templateUrl: 'components/ngTemplates/newQuestionToast/newQuestionToast.html',
            hideDelay: 6000,
            position: 'top left'
          });
        });
      }, function() {            // cancelled
        $scope.alert = 'You cancelled the dialog.';
      });
    };

    $scope.questions = QuestionFactory.questionAPI.getNewQuestionBatch();

    $scope.markSeen = function(item) {
      item.seen = true;
      item.viewCountIncremented = false;
      return true;
    };

    $scope.discarded = function(item) {
      if (item.discarded) {
        return false;
      }
      return true;
    };
    $scope.questionsAnswered = 0; // how many question the user has answered
    $scope.answerFirstOption = function (answer) {
      answer.answer = '1';
      questionAnswered(answer);
    };
    $scope.answerSecondOption = function (answer) {
      answer.answer = '2';
      questionAnswered(answer);
    };

    var questionAnswered = function(answer) {
      $scope.questionsAnswered++;
      answer.discarded = true;
      QuestionFactory.updateQuestionCards($scope.questions);
      if ($scope.questionsAnswered % 8 === 0) { // 1 question remaining, get new batch
        var newBatch = QuestionFactory.questionAPI.getNewQuestionBatch(function() {
          angular.forEach(newBatch, function (value, key) {
            $scope.questions.push(value);
          });
        });
      }
    };

    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
