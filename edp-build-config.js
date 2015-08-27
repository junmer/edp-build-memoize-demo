exports.input = __dirname;

var path = require( 'path' );
exports.output = path.resolve( __dirname, 'output' );

// var moduleEntries = 'html,htm,phtml,tpl,vm,js';
// var pageEntries = 'html,htm,phtml,tpl,vm';

var MemoizeProcessor = require('edp-build-memoize');

exports.getProcessors = function () {
    var lessProcessor = new LessCompiler();
    var cssProcessor = new CssCompressor();
    var moduleProcessor = new ModuleCompiler();
    var jsProcessor = new JsCompressor();
    jsProcessor = new MemoizeProcessor(jsProcessor, {
        name: 'jscompress',
        files: ['*.js']
    });
    var pathMapperProcessor = new PathMapper();
    var addCopyright = new AddCopyright();

    return {
        'default': [ lessProcessor, moduleProcessor, jsProcessor, pathMapperProcessor ],
        'release': [
            lessProcessor, cssProcessor, moduleProcessor,
            jsProcessor, pathMapperProcessor, addCopyright
        ]
    };
};

exports.exclude = [
    'node_modules',
    'tool',
    'doc',
    'test',
    'module.conf',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    '.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp'
];

exports.injectProcessor = function ( processors ) {
    for ( var key in processors ) {
        global[ key ] = processors[ key ];
    }
};

