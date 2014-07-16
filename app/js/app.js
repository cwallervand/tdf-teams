'use strict';


// Declare app level module which depends on filters, and services
var tdfTeamsApp = angular.module('tdfTeams', [
  'ngRoute',
  'tdfTeams.filters',
  'tdfTeams.services',
  'tdfTeams.directives',
  'tdfTeams.controllers'
]);

tdfTeamsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {
  	templateUrl: 'partials/team-list.html', controller: 'TeamListCtrl'
  }).
  when('/view2', {
  	templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'
  }).
  otherwise({redirectTo: '/teams'});
}]);
