'use strict';

/**
 * @ngdoc overview
 * @name chatAppFrontEndApp
 * @description
 * # chatAppFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('chatAppFrontEndApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'formly',
    'formlyBootstrap',
    'lbServices'
  ])
  
  .config(function(LoopBackResourceProvider,$httpProvider){
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
  
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth){
      return {
        responseError: function(rejection) {
          if (rejection.status === 401){
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/signup', {
        templateUrl: '/views/signup.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/login', {
        templateUrl: '/views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
