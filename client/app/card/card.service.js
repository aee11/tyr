'use strict';

angular.module('tyrApp')
  .service('card', function ($resource) {
    var cardResource = $resource('/api/card/:cardId', {
      {cardId: '@id'}
    });
    return cardResource;
  });
