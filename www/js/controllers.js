angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$meteor) {
    console.log("Meteor ", Meteor);
    console.log("$meteor", $meteor);
    $scope.googleLogin = function () {
        Meteor.loginWithGoogle({requestPermissions: ['email']}, function (err) {
            if (err) {
                throw new Meteor.Error("login failed");
            }
            else {
                console.log("success")
            }
        });
        /*$meteor.loginWithGoogle({requestPermissions: ['email']}).then(function(){

         });*/
    }
    $scope.faceBookLogin = function () {
        /* Meteor.loginWithPassword("test","test", function(err){
         if (err) {
         throw new Meteor.Error("login failed");
         }
         else{
         console.log("success")
         }
         });
         */
        $meteor.loginWithFacebook({requestPermissions: ['email']}, function (err) {
            if (err) {
                throw new $meteor.Error("Facebook login failed");
            }
            else {
                console.log("success")
            }
        });
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
