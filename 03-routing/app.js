/**
 * @module application
 */
angular.module('application',
        ['ngRoute']
    )

    .config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/start', {
                templateUrl: 'view/start.tpl.html'
            })
            .when('/about', {
                templateUrl: 'view/about.tpl.html'
            })
            .when('/contact', {
                templateUrl: 'view/contact.tpl.html',
                controller: 'ContactCtrl',
                resolve: {
                    data: function () {
                        return 'Norbert Schmidt, Mayflower GmbH';
                    }
                }
            }).otherwise({
                redirectTo: '/start'
            });
    })

    .controller('ContactCtrl', function ($scope, data) {
        'use strict';

        $scope.data = data;
    });
