'use strict';

angular.module('tyrApp')
  .controller('NewCardCtrl', function ($scope, $location, Card) {
    $scope.newCard = {};
    $scope.newCard.question = Card.test();
    $scope.addNewCard = function (newCard) {
      Card.cardApi.save({
        question: $scope.newCard.question,
        option1: $scope.newCard.option1,
        option2: $scope.newCard.option2
      }, function (value, responseHeaders) { // success
        $location.path('/');
      }, function (error) { // error
        console.error('Could not submit question.');
      });
    };
  });
