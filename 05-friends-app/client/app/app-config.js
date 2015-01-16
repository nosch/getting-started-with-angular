/**
 * Friends application
 * @module application.config
 */
angular.module('application.config', [
        'ui.router',
        'friends'
    ])

    .constant('NAV_ITEMS', [
        {title: 'Home', state: 'home', sref: 'home', icon: 'glyphicon-home'},
        {title: 'List', state: 'friends', sref: 'friends.list', icon: 'glyphicon-list'},
        {title: 'About', state: 'about', sref: 'about', icon: 'glyphicon-info-sign'},
        {title: 'Contact', state: 'contact', sref: 'contact', icon: 'glyphicon-earphone'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/view/home.tpl.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/view/about.tpl.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/view/contact.tpl.html'
            });
    });
