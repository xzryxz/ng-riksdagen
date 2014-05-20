'use strict';

describe('Service: D3Service', function () {

  // load the service's module
  beforeEach(module('ngRiksdagenApp'));

  // instantiate service
  var D3Service;
  beforeEach(inject(function (_D3Service_) {
    D3Service = _D3Service_;
  }));

  it('should do something', function () {
    expect(!!D3Service).toBe(true);
  });

});
