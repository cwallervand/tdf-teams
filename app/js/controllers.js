'use strict';

/* Controllers */

var tdfTeamsControllers = angular.module('tdfTeams.controllers', []);

tdfTeamsControllers.controller('TeamListCtrl', ['$scope', 'TeamsServices', 
	function tdfTeamListCtrlFn($scope, TeamsServices) {
		$scope.teams = TeamsServices.query();
	}]);

tdfTeamsControllers.controller('TeamDetailedCtrl', ['$scope', '$routeParams', 'TeamsServices',
	function tdfTeamDetailedCtrlFn($scope, $routeParams, TeamsServices) {
		$scope.team = TeamsServices.get({teamId: $routeParams.teamId});
	}]);