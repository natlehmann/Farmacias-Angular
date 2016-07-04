'use strict';

describe('Service: FarmaciaService', function () {

  // load the service's module
  beforeEach(module('farmaciasBaApp'));

  // instantiate service
  var FarmaciaService;
  beforeEach(inject(function (_FarmaciaService_) {
    FarmaciaService = _FarmaciaService_;
  }));

  it('should do something', function () {
    expect(!!FarmaciaService).toBe(true);
  });

});
