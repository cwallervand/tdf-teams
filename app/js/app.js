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
  when('/teams/:teamId', {
  	templateUrl: 'partials/team-detailed.html', controller: 'TeamDetailedCtrl'
  }).
  otherwise({redirectTo: '/teams'});
}]);
