'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc Main controller.
 * @param {Object} $scope - ng
 * @param {Object} $sce - ng
 * @param {Object} showdown - showdown markdown converter
 * @param {Object} texts - texts constant
 * @param {Object} rules - rules common constant
 * @param {Object} rules_langs - rules per language constant
 * @param {Object} frenchify - frenchify
 */

module.exports = [
    '$scope',
    '$sce',
    'showdown',
    'texts',
    'rules',
    'rules_langs',
    'frenchify',
    function($scope, $sce, showdown, texts, rules, rules_langs, frenchify) {
        $scope.txt = texts;

        function convert(content, convertMarkdown, convertHelpers, convertLang) {

            if (convertLang) {
                content = frenchify(content, rules_langs[convertLang]);
            }

            if (convertHelpers) {
                content = frenchify(content, rules);
            }

            if (convertMarkdown) {
                content = showdown.makeHtml(content);
            }

            return content;

        }

        $scope.convert = function() {
            $scope.convert.html = convert($scope.convert.from, $scope.convert.markdown, $scope.convert.helpers, $scope.convert.lang);
            $scope.convert.html = $sce.trustAsHtml($scope.convert.html);
        };
    }
];
