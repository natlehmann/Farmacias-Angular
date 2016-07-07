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
	  
	  $scope.listado = FarmaciaService.query();
  });
