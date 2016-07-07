'use strict';


describe('FarmaciasListCtrl', function() {  
    beforeEach(module('farmaciasBaApp')); //load the app

    var $controller;
    var scopeMock = {};
    var serviceMock = {};
    
    var farmacias = [{"id":1,"nombre":"Farmacia 1","direccion":"ALVAREZ THOMAS AV. 302",
  	  "comuna":"15","telefono":"45532124","geolocalizacion":"POINT (-58.448703411884111 -34.581626839084123)",
  	  "barrio":"CHACARITA"},
  	  {"id":2,"nombre":"Farmacia 2","direccion":"ALVAREZ THOMAS AV. 1238","comuna":"15",
  		  "telefono":"45540134","geolocalizacion":"POINT (-58.458965761522641 -34.578552988510332)",
  		  "barrio":"CHACARITA"},
  	  {"id":3,"nombre":"Farmacia 3","direccion":"CORRIENTES AV. 6151","comuna":"15","telefono":"48546014",
  			  "geolocalizacion":"POINT (-58.446978980438374 -34.592009468539977)","barrio":"CHACARITA"}];
    

    beforeEach(inject(function(_$controller_) {
        // inject the controller service
        $controller = _$controller_;
    }));
    
    it('deberia estar definido el filtro', function() {  
        
        serviceMock.query = function() {
      	  return [];
        };
        
        $controller('FarmaciasListCtrl', { $scope: scopeMock, FarmaciaService: serviceMock });

        expect(scopeMock.filtro).toBe("");
    });
    
    
    it('deberia estar definido el listado', function() {  
        
        serviceMock.query = function() {
      	  return farmacias;
        };
        
        $controller('FarmaciasListCtrl', { $scope: scopeMock, FarmaciaService: serviceMock });

        expect(scopeMock.listado.length).toEqual(3);
    });

});

