'use strict';

angular.module('tyrApp')
  .controller('NewQuestionDialogCtrl', function ($scope, $mdDialog) {
    $scope.newQuestion = {};
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.ask = function() {
      $mdDialog.hide($scope.newQuestion);
    };
  });
