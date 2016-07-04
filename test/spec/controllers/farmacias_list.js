'use strict';

describe('Controller: FarmaciasListCtrl', function () {

  // load the controller's module
  beforeEach(module('farmaciasBaApp'));

  var FarmaciasListCtrl,scope;
  
  var farmacias = [{"id":1,"nombre":"Farmacia 1","direccion":"ALVAREZ THOMAS AV. 302","comuna":"15","telefono":"45532124","geolocalizacion":"POINT (-58.448703411884111 -34.581626839084123)","barrio":"CHACARITA"},{"id":2,"nombre":"Farmacia 2","direccion":"ALVAREZ THOMAS AV. 1238","comuna":"15","telefono":"45540134","geolocalizacion":"POINT (-58.458965761522641 -34.578552988510332)","barrio":"CHACARITA"},{"id":3,"nombre":"Farmacia 3","direccion":"CORRIENTES AV. 6151","comuna":"15","telefono":"48546014","geolocalizacion":"POINT (-58.446978980438374 -34.592009468539977)","barrio":"CHACARITA"}];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FarmaciasListCtrl = $controller('FarmaciasListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    
    jasmine.addCustomEqualityTester(angular.equals);
  }));
  
  
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('scope deberia tener un filtro', function ($scope) {
	  
	  var farmacias = FarmaciaService.query();

	    expect(farmacias).toEqual([]);
	
	    $httpBackend.flush();
	    expect(farmacias).toEqual(farmacias);
	    
	    
    //expect($scope.filtro).toBe('');
  });
});
