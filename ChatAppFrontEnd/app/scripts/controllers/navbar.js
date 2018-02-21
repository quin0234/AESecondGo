'use strict';

/**
 * @ngdoc function
 * @name chatAppFrontEndApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the chatAppFrontEndApp
 */
angular.module('chatAppFrontEndApp')
  .controller('NavbarCtrl', function ($scope, Auth, $rootScope) {

    $scope.isLoggedin=false;

    Auth.ensureCurrentUser(function(){
      $scope.currentUser=Auth.currentUser;
      $scope.islogged=$rootScope.isLogged;
    });

    $rootScope.$watch('islogged', function(newValue, oldValue){
      $scope.isLoggedin=newValue;
      console.log('islogged changed value : '+newValue);
      if(newValue){
        $scope.currentUser=Auth.currentUser;
        $scope.isLoggedin=newValue;
      }
    });

    $scope.logout = function () {
      Auth.logout();
    };
  });
