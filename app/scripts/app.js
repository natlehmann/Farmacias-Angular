'use strict';

/**
 * @ngdoc overview
 * @name farmaciasBaApp
 * @description
 * # farmaciasBaApp
 *
 * Main module of the application.
 */
angular
  .module('farmaciasBaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
    	  redirectTo: '/farmacias/list'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/farmacias/list', {
        templateUrl: 'views/farmacias_list.html',
        controller: 'FarmaciasListCtrl',
        controllerAs: 'farmaciasList'
      })
      .otherwise({
        redirectTo: '/farmacias/list'
      });
  });
