'use strict';

describe('Filter: trustAsResourceUrl', function () {

  // load the filter's module
  beforeEach(module('farmaciasBaApp'));
  
  var sceMock = {};
  sceMock.trustAsResourceUrl = function(value) {
	  return "ok" + value;
  };

  // initialize a new instance of the filter before each test
  var trustAsResourceUrl;
  beforeEach(inject(function ($filter) {
    trustAsResourceUrl = $filter('trustAsResourceUrl', {$sce: sceMock});
  }));

  it('deberia invocar a trustAsResourceUrl', function () {
    var text = 'hola';
    expect(trustAsResourceUrl(text) + "").toBe('hola');
  });

});
