'use strict';

/* Controllers */

var tdfTeamsControllers = angular.module('tdfTeams.controllers', []);

tdfTeamsControllers.controller('TeamListCtrl', ['$scope', 'TeamsServices', function($scope, TeamsServices) {
	$scope.teams = TeamsServices.query();
}]);

tdfTeamsControllers.controller('MyCtrl2', ['$scope', function($scope) {

}]);
