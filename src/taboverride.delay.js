/*! taboverride.delay v0.1-dev | https://github.com/wjbryant/taboverride.delay
Copyright (c) 2013 Bill Bryant | http://opensource.org/licenses/mit */

/*global TABOVERRIDE */

// use CommonJS or AMD if available
(function (factory) {
    'use strict';

    if (typeof exports === 'object' && typeof require === 'function') {
        // Node.js/CommonJS
        factory(require('taboverride'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD - register as an anonymous module
        // files must be concatenated using an AMD-aware tool such as r.js
        define(['taboverride'], factory);
    } else {
        // no module format - use global variable
        factory(TABOVERRIDE);
    }
}(function (TABOVERRIDE) {
    'use strict';

    var delay = 250,
        focusListener = TABOVERRIDE.utils.createListeners([{
            type: 'focus',
            handler: function (e) {
                e = e || event;
                var target = e.target || e.srcElement;

                TABOVERRIDE.utils.removeListeners(target);

                setTimeout(function () {
                    TABOVERRIDE.utils.addListeners(target);
                }, delay);
            }
        }]);

    TABOVERRIDE.delay = function (ms) {
        if (arguments.length) {
            delay = typeof ms === 'number' && ms >= 0 ? ms : 0;
            return this;
        }
        return delay;
    };

    TABOVERRIDE.addExtension(function (elem, enable) {
        focusListener[enable ? 'add' : 'remove'](elem);
    });
}));
