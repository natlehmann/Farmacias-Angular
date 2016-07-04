'use strict';

/**
 * @ngdoc function
 * @name farmaciasBaApp.controller:FarmaciasListCtrl
 * @description
 * # FarmaciasListCtrl
 * Controller of the farmaciasBaApp
 */
angular.module('farmaciasBaApp')
  .controller('FarmaciasListCtrl', function ($scope, FarmaciaService) {
    
	  $scope.filtro = '';
	  
	  FarmaciaService.query(function(data){
		  $scope.listado = data;
	  });
	  
  });
