'use strict';

describe('Service: D3', function () {

  // load the service's module
  beforeEach(module('ngRiksdagenApp'));

  // instantiate service
  var D3;
  beforeEach(inject(function (_D3_) {
    D3 = _D3_;
  }));

  it('should do something', function () {
    expect(!!D3).toBe(true);
  });

});
