/**
 * @file [Please input file description]
 * @author ()
 */

define(function (require, exports, module) {
    // 引入一个依赖的模块，可以使用require(relative/top-level id)
    // var dependModule = require('./dependModule');

    var boo = require('./boo');
    var foo = require('./foo');

    /**
     * [Please input module description]
     */
    function app() {
        boo();
        foo();
    }


    app();

});
