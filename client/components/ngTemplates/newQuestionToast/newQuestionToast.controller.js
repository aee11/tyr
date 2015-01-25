'use strict';

angular.module('tyrApp')
  .controller('NewQuestionToastCtrl', function ($scope, $mdToast, $location) {
    $scope.viewQuestion = function () {
      $location.path('/myQuestions')
      $mdToast.hide();
    }
  });
