'use strict';

angular.module('tyrApp')
  .controller('NewCardCtrl', function ($scope, card) {
    $scope.newCard = {};
    $scope.addNewCard = function (newCard) {
      console.log(newCard);
      // Card.create(data.id)
    };
  });
