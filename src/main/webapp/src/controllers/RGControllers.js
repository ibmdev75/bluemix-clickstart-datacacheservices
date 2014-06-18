'use strict';
var app = angular.module('RGApp.controllers', ["ui.router"]);


// Définition des routes de navigation
app.config(function($stateProvider) {

    $stateProvider
    .state('init', {
     url: "",
     templateUrl: "./src/templates/init.html",

    });
});


// Service de recherche de règles de navigation

app.factory('EPSRuleService', function($rootScope) {
    var eps = {
        getRules: function() {
            console.log("chargement des règles de navigation");
        }
    };
    return eps;
});

app.controller('Declarer', function($scope, EPSRuleService) {
    EPSRuleService.getRules();
    $scope.name="test";
    $scope.isBold = true;
});

// Launcement de l'application
app.run(
    ['$rootScope', '$state', '$stateParams','EPSRuleService',
     function ($rootScope,   $state,   $stateParams,eps) {
         $state.go('init');
 }]);


