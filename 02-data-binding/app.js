/**
 * @module application
 */
angular.module('application', [])
    .controller('FriendsCtrl', function ($scope) {
        'use strict';

        $scope.friends = [
            {id: 101, name: 'Micha', phone: '02366 34567'},
            {id: 102, name: 'Kai', phone: '0931 467839'},
            {id: 103, name: 'Erika', phone: '030 4892673'},
            {id: 104, name: 'Melanie', phone: '030 7829476'},
            {id: 105, name: 'Horst', phone: '0931 3478325'},
            {id: 106, name: 'Gunnar', phone: '0931 9346723'},
            {id: 107, name: 'Lothar', phone: '040 7345623'},
            {id: 108, name: 'Gudrun', phone: '02361 349123'},
            {id: 109, name: 'Günther', phone: '030 4892673'},
            {id: 110, name: 'Gisela', phone: '0931 467839'}
        ];

        $scope.alertName = function (friend) {
            alert('Name: ' + friend.name);
        }
    });
