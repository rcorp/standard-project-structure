module.exports = function(grunt) {
  return {
    reporter: 'spec',
    target: (grunt.option('file') ? ['test/spec/unit/<%= grunt.option("file") %>'] :
    ['test/spec/unit/**/*.js']),
  };
};
