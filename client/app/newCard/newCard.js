'use strict';

angular.module('tyrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newCard', {
        url: '/newCard',
        templateUrl: 'app/newCard/newCard.html',
        controller: 'NewCardCtrl'
      });
  });