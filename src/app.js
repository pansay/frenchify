'use strict';

/* global angular */

angular.module('frenchify', [])
    .constant('texts', require('../texts.json'))
    .service('showdown', [require('showdown').Converter])
    .constant('frenchify', require('./frenchify'))
    .constant('rules', require('../rules/rules.json'))
    .constant('rules_langs', {
        fr: require('../rules/rules-fr.json'),
        en: require('../rules/rules-en.json'),
        es: require('../rules/rules-es.json')
    })
    .controller('MainController', require('./MainController'));
