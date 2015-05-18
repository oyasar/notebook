// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

var IPython = IPython || {};
define(function(){
    var utils = require('base/js/utils');
    IPython.utils = utils;
    IPython.load_extensions = utils.load_extensions;

    "use strict";
    IPython.version = "4.0.0.dev";
    IPython._target = '_blank';
    return IPython;
});
