module.exports = {
  src: ['test/spec/unit/**/*.js'], // multiple folders also works
  options: {
    coverage: true, // this will make the grunt.event.on('coverage')
    reportFormats: ['lcov'],
  },
};
