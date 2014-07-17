'use strict';

/* Controllers */

var tdfTeamsControllers = angular.module('tdfTeams.controllers', []);

tdfTeamsControllers.controller('TeamListCtrl', ['$scope', 'TeamsAPI', 'TeamsService',
	function tdfTeamListCtrlFn($scope, TeamsAPI, TeamsService) {

		$scope.teams = TeamsService.getTeams();
}]);

tdfTeamsControllers.controller('TeamDetailedCtrl', ['$scope', '$routeParams', 'TeamsAPI', 'TeamsService',
	function tdfTeamDetailedCtrlFn($scope, $routeParams, TeamsAPI, TeamsService) {
		$scope.team = TeamsService.getTeam($routeParams.teamId);
	}]);