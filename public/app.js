/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'myApp.controllers', 'ngResource', 'myApp.services'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('posts', {
        url: "/",
        templateUrl: 'templates/posts-index',
        controller: 'PostsIndexCtrl'
      });

    $stateProvider
      .state('comments', {
        url: "/",
        templateUrl: 'templates/posts-index',
        controller: 'PostsIndexCtrl'
      });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
