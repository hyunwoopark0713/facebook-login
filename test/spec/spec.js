describe('App Module', function () {
    var $scope = null;
    var ctrl = null;

    beforeEach(module('App'));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    describe('Login Control', function () {

        beforeEach(inject(function ($controller) {
            loginCtrl = $controller('LoginCtrl', {
                $scope: $scope
            });
            
            var getFriends = document.createElement("input");
            getFriends.id = "getFriends";
            document.body.appendChild(getFriends);
            
            var login = document.createElement("input");
            login.id = "login";
            document.body.appendChild(login);
        }));

        it('Should display "Get Friends" button and hide other buttons', function () {
            $scope.displayGetFriendsButton();
            expect(document.getElementById('getFriends').style.visibility).toBe("visible");
            expect(document.getElementById('login').style.visibility).toBe("hidden");
        });
    });

    describe('Friends Control', function () {

        beforeEach(inject(function ($controller) {
            friendsCtrl = $controller('FriendsCtrl', {
                $scope: $scope
            });
        }));

        it('Should add multiple friends objects to friends array', function () {
            var multipleFriends = [{
                id: "a",
                name: "b"
            },
            {
                id: "c",
                name: "d"
            }];
            $scope.addFriends(multipleFriends);
            expect($scope.friends.length).toBeGreaterThan(1);
        });
        
        it('Should add one friend object to friends array', function () {
            var oneFriend = {
                id: "a",
                name: "b"
            };
            $scope.addFriend(oneFriend);
            expect($scope.friends.length).toBeGreaterThan(0);
        });
    });
});