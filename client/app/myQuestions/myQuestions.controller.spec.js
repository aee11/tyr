'use strict';

describe('Controller: MyQuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('tyrApp'));

  var MyQuestionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyQuestionsCtrl = $controller('MyQuestionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
