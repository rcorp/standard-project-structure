module.exports = function(grunt) {
  return {
    'frontend-wct': {
      files: {
        'test/spec/unit/bundle.js': (grunt.option('file') ?
        ['test/spec/unit/<%= grunt.option("file") %>'] :
        ['test/spec/unit/**/*.js', '!test/spec/unit/bundle.js']),
      },
      options: {
        debug: true,
        sourceMaps: true,
        verbose: true,
        ignore: ['test/spec/unit/bundle.js'],
      }
    }
  }
};
