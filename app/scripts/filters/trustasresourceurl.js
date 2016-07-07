'use strict';

/**
 * @ngdoc filter
 * @name farmaciasBaApp.filter:trustAsResourceUrl
 * @function
 * @description
 * # trustAsResourceUrl
 * Filter in the farmaciasBaApp.
 */
angular.module('farmaciasBaApp')
  .filter('trustAsResourceUrl', ['$sce', function($sce) {
	    return function(val) {
	        return $sce.trustAsResourceUrl(val);
	    };
}]);
