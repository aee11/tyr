'use strict';

describe('Controller: NewCardCtrl', function () {

  // load the controller's module
  beforeEach(module('tyrApp'));

  var NewCardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCardCtrl = $controller('NewCardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
