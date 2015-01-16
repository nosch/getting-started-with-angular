/**
 * Friends application
 * @module friends
 */
angular.module('friends', [
        'friends.config'
    ])

    .controller('ListCtrl', function ($scope, friends, $state) {
        'use strict';

        $scope.list = {
            data: friends.data
        };

        $scope.select = function (friend) {
            $state.go('friends.update', {id: friend.id});
        };
    })

    .controller('FormCtrl', function ($scope, friend, friendsService, $state) {
        'use strict';

        var friendCopy = angular.copy(friend);

        $scope.friend = friend.data;

        $scope.heading = (!$scope.friend.id) ? 'New Friend' : 'Edit Friend';

        $scope.save = function () {
            if ($scope.friend.name !== '' && $scope.friend.age !== '') {
                if ($scope.friend.id) {
                    friendsService.update($scope.friend.id, $scope.friend, function (data) {
                        $state.go('friends.list');
                    })
                } else {
                    friendsService.add($scope.friend, function (data) {
                        $state.go('friends.list');
                    })
                }
            }
        };

        $scope.remove = function (friend) {
            if (confirm('Remove "' + friend.name + '" from list?')) {
                friendsService.remove(friend.id, function (data) {
                    $state.go('friends.list');
                });
            }
        };

        $scope.cancel = function () {
            angular.copy(friendCopy, $scope.friend);

            $state.go('friends.list');
        };
    });
