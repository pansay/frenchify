'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc Main controller.
 * @param {Object} $scope - ng
 * @param {Object} $sce - ng
 * @param {Object} showdown - showdown markdown converter
 * @param {Object} texts - texts constant
 * @param {Object} frenchify - frenchify
 */

module.exports = [
    '$scope',
    '$sce',
    'showdown',
    'texts',
    'frenchify',
    function($scope, $sce, showdown, texts, frenchify) {
        $scope.txt = texts;

        function convert(content, convertMarkdown, convertFrenchify) {
            if (convertFrenchify) {
                content = frenchify(content);
            }
            if (convertMarkdown) {
                content = showdown.makeHtml(content);
            }
            return content;
        }

        $scope.convert = function() {
            $scope.convert.html = convert($scope.convert.from, $scope.convert.markdown, $scope.convert.frenchify);
            $scope.convert.html = $sce.trustAsHtml($scope.convert.html);
        };
    }
];
