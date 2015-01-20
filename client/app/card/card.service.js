'use strict';

angular.module('tyrApp')
  .factory('Card', function ($resource) {
    // Service logic
    // ...

    var cardResource = $resource('/api/cards/:id');

    var testFunction = function () {
      return 'HEY!!';
    };
    // Public API here
    return {
      cardApi: cardResource,
      test: testFunction
    };
});
