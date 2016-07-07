'use strict';

/**
 * @ngdoc function
 * @name farmaciasBaApp.controller:FarmaciaDetalleCtrl
 * @description
 * # FarmaciaDetalleCtrl
 * Controller of the farmaciasBaApp
 */
angular.module('farmaciasBaApp')
  .controller('FarmaciaDetalleCtrl', function ($scope, $routeParams, FarmaciaService) {
    
	  FarmaciaService.get({id: $routeParams.id}, function(data){
		  
		  var punto = data.geolocalizacion.replace("POINT (", "").replace(")", "");		
		  var puntos = punto.split(" ");
		  
		  var url = "https://www.google.com/maps/embed/v1/place?q=" + puntos[1] + "%20" + puntos[0] + "%20&key=AIzaSyA2rs-yAx3Yp-GCc92MsovXXVGsTUiLf0U";
		  $scope.url = url;
			
		  $scope.direccion = data.direccion;
	  });
	  
  });
