'use strict';

/* global angular */

angular.module('frenchify', [])
    .constant('texts', require('../texts.json'))
    .service('showdown', [require('showdown').Converter])
    .constant('frenchify', require('./frenchify'))
    .controller('MainController', require('./MainController'));
