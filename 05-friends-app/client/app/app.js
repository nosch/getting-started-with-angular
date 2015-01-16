/**
 * Friends application
 * @module application
 */
angular.module('application', [
        'application.config'
    ])

    .run(function ($rootScope, $state, $stateParams) {
        'use strict';

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })

    .controller('NavigationCtrl', function ($scope, NAV_ITEMS) {
        'use strict';

        $scope.navItems = NAV_ITEMS;
    });
