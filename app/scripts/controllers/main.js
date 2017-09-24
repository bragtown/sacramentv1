'use strict';

/**
 * @ngdoc function
 * @name sacramentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sacramentApp
 */
angular.module('sacramentApp')
  .controller('MainCtrl', function ($scope, HymnFact) {

    $scope.image = HymnFact.getImage()
    $scope.ward = HymnFact.getWard()
    $scope.presiding = HymnFact.getPresiding()
    $scope.conducting = HymnFact.getConducting()
    $scope.organist = HymnFact.getOrganist()
    $scope.chorister = HymnFact.getChorister()
    $scope.hymns = HymnFact.getSacHymns();
    $scope.programName = HymnFact.getProgramName();
    $scope.fast = HymnFact.getFast();
    $scope.program = HymnFact.getProgram();
    $scope.youthSpeakers = HymnFact.getYouthSpeakers();
	$scope.pSpeakers = HymnFact.getPSpeakers();
	$scope.aSpeakers = HymnFact.getASpeakers();
	$scope.invocation = HymnFact.getInvocation();
	$scope.benediction = HymnFact.getBenediction();
	$scope.reminders = HymnFact.getReminders();
	$scope.sReminders = HymnFact.getSReminders();
	$scope.announcements = HymnFact.getAnnouncements();
	$scope.sAnnouncements = HymnFact.getSAnnouncements();
	$scope.emergencyPrep = HymnFact.getEmergencyPrep();

 	
	


  });