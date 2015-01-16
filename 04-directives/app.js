/**
 * @module application
 */
angular.module('application', [])
    .controller('DirectiveCtrl', function ($scope) {
        'use strict';

        $scope.isVisible = true;

        $scope.setVisible = function (visible) {
            $scope.isVisible = visible;
        }
    })

    .directive('directiveAttributes', function () {
        'use strict';

        var linkFn = function (scope, elem, attrs, ctrl) {
            attrs.$observe('type', function (value) {
                elem.addClass(value);
            });
        };

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'view/attributes.tpl.html',
            scope: true,
            link: linkFn
        }
    })

    .directive('directiveBehaviour', function () {
        'use strict';

        var scopeObj = {
            type: '@',
            alterType: '@'
        };

        var linkFn = function (scope, elem, attrs, ctrl) {
            elem.on('click', function () {
                $(this).removeClass(attrs.type);
                $(this).addClass(attrs.alterType);

                $(this).find('.panel-body').text('Activated')
            });
        };

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'view/behaviour.tpl.html',
            scope: scopeObj,
            link: linkFn
        }
    })

    .directive('directiveData', function () {
        'use strict';

        var scopeObj = {
            isVisible: '='
        };

        var linkFn = function (scope, elem, attrs, ctrl) {
            scope.$watch('isVisible', function (value) {
                if (value === false) {
                    elem.fadeOut(1500);
                } else {
                    elem.fadeIn(1500);
                }
            });

            elem.on('click', function () {
                scope.$apply(function () {
                    scope.isVisible = !scope.isVisible;
                });
            })
        };

        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'view/data.tpl.html',
            scope: scopeObj,
            link: linkFn
        }
    });
