/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //POSTS
  .controller('PostsIndexCtrl', ['Post', '$scope', '$location', '$http', function (Post, $scope, $location, $http) {
    // GET POSTS
    $scope.posts = Post.query();

    // CREATE A POST    
    $scope.createPost = function() {
      var post = new Post($scope.post);
      post.$save(function(data) {
        $scope.posts.unshift(data);
        $scope.post = {};
      });
    };

    // DELETE A POST
    $scope.deletePost = function(post, index) {
      Post.remove({ id: post._id }, function(data) {
        $scope.posts.splice(index, 1);
      });
    };
}]);
