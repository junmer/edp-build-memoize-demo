/**
 * @file [Please input file description]
 * @author ()
 */

define(function (require, exports, module) {

    var $ = require('jquery');

    var hello = require('./hello');
    var world = require('./world');

    /**
     * [Please input module description]
     */
    function app() {

        var html = hello() + world();

        $('body').append(html);

    }

    // ready
    $(app);

});
