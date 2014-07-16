'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var tdfTeamsServices = angular.module('tdfTeams.services', [
	'ngResource'
]);

tdfTeamsServices.factory('TeamsServices', ['$resource',
  function tdfTeamsServicesFn($resource){
    return $resource('http://rest.tv2.no/cycling-dw-rest/event/12312/teams/:teamId', {}, {
      query: {
      	method:'GET', params:{teamId:''}, isArray:true
      }
    });
  }]);
