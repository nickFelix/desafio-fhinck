'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngFileUpload',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');


  $routeProvider.when('/form', {
    templateUrl: 'form/fhinck-form.html',
    controller: 'FhinckFormCtrl',
    controllerAs: 'fhinck'
  })
  .otherwise({redirectTo: '/form'});
}]);