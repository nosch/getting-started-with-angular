/**
 * Friends application
 * @module friends
 */
angular.module('friends', [
        'friends.config'
    ])

    .controller('ListCtrl', function ($scope, friendsService, $state) {
        'use strict';

        $scope.list = {
            data: []
        }

        $scope.select = function (friend) {
            $state.go('friends.update', {id: friend.id});
        };

        friendsService.getAll(function (data) {
            $scope.list.data = data;
        });
    })

    .controller('FormCtrl', function ($scope, friend, friendsService, $state) {
        'use strict';

        var friendCopy = angular.copy(friend);

        $scope.friend = friend.data;

        $scope.heading = (!$scope.friend.id) ? 'New Friend' : 'Edit Friend';

        $scope.save = function () {
            if ($scope.friend.id) {
                friendsService.update($scope.friend.id, $scope.friend, function (data) {

                    console.log(data);

                    $state.go('friends.list');
                })
            } else {
                friendsService.add($scope.friend, function (data) {

                    console.log(data);

                    $state.go('friends.list');
                })
            }
        }

        $scope.reset = function () {
            angular.copy(friendCopy, $scope.friend);

            $state.go('friends.list');
        };
    })
