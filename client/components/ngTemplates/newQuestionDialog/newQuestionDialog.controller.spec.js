'use strict';

describe('Controller: NewQuestionDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('tyrApp'));

  var NewQuestionDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewQuestionDialogCtrl = $controller('NewQuestionDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
