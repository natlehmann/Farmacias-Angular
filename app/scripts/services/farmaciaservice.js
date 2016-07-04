'use strict';

/**
 * @ngdoc service
 * @name farmaciasBaApp.FarmaciaService
 * @description
 * # FarmaciaService
 * Factory in the farmaciasBaApp.
 */
angular.module('farmaciasBaApp')
  .factory('FarmaciaService', function ($resource) {
    
	  return $resource('http://localhost:8080/FarmaciasBE/api/farmacias/:id');
  });
