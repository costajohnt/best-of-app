/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //POSTS
  // *** HAVING 'Comment' IN THE CONTROLLER PREVENTS YOUR POSTS FROM DISPLAYING. REMOVE TO SEE POSTS DISPLAYED. I THOUGHT I WOULD NEED IT BUT IT CAUSES ERRORS. ***
  .controller('PostsIndexCtrl', ['Post', 'Comment', '$scope', '$location', '$http', function (Post, Comment, $scope, $location, $http) {
    // GET POSTS
    $scope.posts = Post.query();
    // $scope.post = posts.posts[$stateParams.id];
    // $scope.posts.comments = Post.comments;
    // $scope.posts.comments = Post.post.comments;


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

    // CREATE A COMMENT
    $scope.addComment = function(){
      // console.log(comment);
      var comment = new Comment($scope.comment);
      comment.$save(function(data) {
        $scope.posts.comments.unshift(data);
        $scope.posts.comment= {};
      });
    };


  }]); // PostsIndexCtrl
