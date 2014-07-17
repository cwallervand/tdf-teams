'use strict';

/* Controllers */

var tdfTeamsControllers = angular.module('tdfTeams.controllers', []);

tdfTeamsControllers.controller('TeamListCtrl', ['$scope', 'TeamsService',
	function tdfTeamListCtrlFn($scope, TeamsService) {
		$scope.teams = TeamsService.getTeams();
}]);

tdfTeamsControllers.controller('TeamDetailedCtrl', ['$scope', '$routeParams', 'TeamsService',
	function tdfTeamDetailedCtrlFn($scope, $routeParams, TeamsService) {
		$scope.team = TeamsService.getTeam($routeParams.teamId);
		scope.riders = 
	}]);

var tdfRidersControllers = angular.module('tdfRiders.controllers', []);

tdfRidersControllers.controller('RiderDetailedCtrl', ['$scope', '$routeParams', 'RidersService',
	function tdfRiderDetailedCtrlFn($scope, $routeParams, RidersService) {
		$scope.rider = RidersService.getRider($routeParams.riderId);
	}]);