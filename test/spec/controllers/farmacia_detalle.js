'use strict';

describe('Controller: FarmaciaDetalleCtrl', function() {  
    beforeEach(module('farmaciasBaApp')); //load the app

    var $controller;
    var scopeMock = {};
    var serviceMock = {};
    var routeParams = {id: 1};
    
    serviceMock.get = function(routeParams, callback) {
    	  callback(farmacia);
    };
    
    var farmacia = {"id":1,"nombre":"Farmacia 1","direccion":"ALVAREZ THOMAS AV. 302",
  	  "comuna":"15","telefono":"45532124","geolocalizacion":"POINT (-58.448703411884111 -34.581626839084123)",
  	  "barrio":"CHACARITA"};
    

    beforeEach(inject(function(_$controller_) {
        // inject the controller service
        $controller = _$controller_;
    }));
    
    it('deberia estar definida la URL', function() {         
        
        $controller('FarmaciaDetalleCtrl', { $scope: scopeMock, FarmaciaService: serviceMock,
        	$routeParams: routeParams});

        expect(scopeMock.url).toBeDefined();
    });
    
    
    it('deberia estar definida la direccion', function() {  
        
        $controller('FarmaciaDetalleCtrl', { $scope: scopeMock, FarmaciaService: serviceMock, 
        	$routeParams: routeParams });

        expect(scopeMock.direccion).toEqual("ALVAREZ THOMAS AV. 302");
    });

});

