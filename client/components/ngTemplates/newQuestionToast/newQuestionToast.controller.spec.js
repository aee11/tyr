'use strict';

describe('Controller: NewQuestionToastCtrl', function () {

  // load the controller's module
  beforeEach(module('tyrApp'));

  var NewQuestionToastCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewQuestionToastCtrl = $controller('NewQuestionToastCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
