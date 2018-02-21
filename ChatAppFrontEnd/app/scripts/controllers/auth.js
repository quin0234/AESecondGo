'use strict';

/**
 * @ngdoc function
 * @name chatAppFrontEndApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the chatAppFrontEndApp
 */
angular.module('chatAppFrontEndApp')
  .controller('AuthCtrl', function ($scope,Auth){
    $scope.signup = function(newUser){
      Auth.signup(newUser);
    };

    $scope.login = function(user){
      Auth.login(user);
    };

    $scope.loginFields = [{
      key: 'email',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Email',
      }
    },{
      key: 'password',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Password',
      }
    }];

    $scope.RegisterFields = [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'First Name',
        }
      }, {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Last Name',
        }
      },{
        key: 'email',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Email',
        }
      },{
        key: 'password',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Password',
        }
      }];
  });
