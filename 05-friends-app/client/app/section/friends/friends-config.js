/**
 * Friends application
 * @module friends.config
 */
angular.module('friends.config', [
        'service.friends'
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $stateProvider
            .state('friends', {
                abstract: true,
                url: '/friends',
                template: '<x-ui-view></x-ui-view>'
            })

            .state('friends.list', {
                url: '',
                templateUrl: 'app/section/friends/view/list.tpl.html',
                controller: 'ListCtrl',
                resolve: {
                    friends: function (friendsService) {
                        return friendsService.getAll(function (result) {
                            return result;
                        })
                    }
                }
            })

            .state('friends.create', {
                url: '/new',
                templateUrl: 'app/section/friends/view/form.tpl.html',
                controller: 'FormCtrl',
                resolve: {
                    friend: function () {
                        return {
                            data: {
                                name: '',
                                city: '',
                                age: null
                            }
                        };
                    }
                }
            })

            .state('friends.update', {
                url: '/edit/:id',
                templateUrl: 'app/section/friends/view/form.tpl.html',
                controller: 'FormCtrl',
                resolve: {
                    friend: function (friendsService, $stateParams) {
                        return friendsService.getOne($stateParams.id, function (result) {
                            return result;
                        })
                    }
                }
            })
    });
