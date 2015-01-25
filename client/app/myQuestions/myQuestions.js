'use strict';

angular.module('tyrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myQuestions', {
        url: '/myQuestions',
        templateUrl: 'app/myQuestions/myQuestions.html',
        controller: 'MyQuestionsCtrl'
      });
  });