'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var tdfTeamsServices = angular.module('tdfTeams.services', [
	'ngResource'
	]);

tdfTeamsServices.factory('TeamsAPI', ['$resource',
	function tdfTeamsServicesFn($resource){
		return $resource('http://rest.tv2.no/cycling-dw-rest/event/12312/teams/:teamId', {/*paramDefaults*/}, {
			query: {
				method:'GET', 
				params:{teamId:''}, 
				isArray:true
			}
		});
}]);

tdfTeamsServices.service('TeamsService', function(TeamsAPI) {
	this.getTeam = function(teamId) {
		var team = _.filter(this.teams, function(team) {
			return team.id == teamId;
		});
		if (team.length === 0) {
			return TeamsAPI.get({teamId: teamId});
		}
		return team[0];
	}

	this.getTeams = function() {
		this.teams = TeamsAPI.query();
		return this.teams;
	}
});


