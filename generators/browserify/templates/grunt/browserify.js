module.exports = {
  browserify: {
    options: {
      debug: true,
      sourceMaps: true,
      verbose: true,
      keepAlive: true,
    },
    files: {
      'dist/bundle.js': 'main.js',
    },
  },
};
