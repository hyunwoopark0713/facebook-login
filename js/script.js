var app = angular.module('App', []);

function LoginCtrl($scope) {
    $scope.login = function () {
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                $scope.displayGetFriendsButton();
            } else {
                $scope.displayLoginPopup();
            }
        });
    }


    $scope.displayLoginPopup = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                $scope.displayGetFriendsButton();
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }

    $scope.displayGetFriendsButton = function () {
        document.getElementById('login').style.visibility = "hidden";
        document.getElementById('getFriends').style.visibility = "visible";
    }
}


function FriendsCtrl($scope) {

    $scope.friends = [];

    $scope.addFacebookFriends = function () {
        FB.api('/me/friends', function (response) {
            $scope.addFriends(response.data);
            $scope.$apply();
        });
    }

    $scope.addFriends = function (friends) {
        angular.forEach(friends, function (friend) {
            $scope.addFriend(friend);
        });
    }

    $scope.addFriend = function (friend) {
        $scope.friends.push({
            name: friend.name,
            id: friend.id
        });
    }
}