/**
 * Friends application
 * @module service.friends
 */
angular.module('service.friends', [])
    .factory('friendsService', function($http) {
        'use strict';

        var add = function (friend, successCb, errorCb) {
            return $http.post('/api/friends', friend)
                .success(successCb)
                .error(errorCb || angular.noop);
        };

        var getAll = function (successCb, errorCb) {
            return $http.get('/api/friends')
                .success(successCb)
                .error(errorCb || angular.noop);
        };

        var getOne = function (id, successCb, errorCb) {
            return $http.get('/api/friends/' + id)
                .success(successCb)
                .error(errorCb || angular.noop);
        };

        var update = function (id, friend, successCb, errorCb) {
            return $http.put('/api/friends', friend)
                .success(successCb)
                .error(errorCb || angular.noop);
        };

        var remove = function (id, successCb, errorCb) {
            return $http.delete('/api/friends/' + id)
                .success(successCb)
                .error(errorCb || angular.noop);
        };

        return {
            add: add,
            getAll: getAll,
            getOne: getOne,
            update: update,
            remove: remove
        };
    });
