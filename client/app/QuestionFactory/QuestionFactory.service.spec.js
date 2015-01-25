'use strict';

describe('Service: QuestionFactory', function () {

  // load the service's module
  beforeEach(module('tyrApp'));

  // instantiate service
  var QuestionFactory;
  beforeEach(inject(function (_QuestionFactory_) {
    QuestionFactory = _QuestionFactory_;
  }));

  it('should do something', function () {
    expect(!!QuestionFactory).toBe(true);
  });

});
