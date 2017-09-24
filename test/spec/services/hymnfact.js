'use strict';

describe('Service: hymnfact', function () {

  // load the service's module
  beforeEach(module('sacramentApp'));

  // instantiate service
  var hymnfact;
  beforeEach(inject(function (_hymnfact_) {
    hymnfact = _hymnfact_;
  }));

  it('should do something', function () {
    expect(!!hymnfact).toBe(true);
  });

});
