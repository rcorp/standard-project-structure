module.exports = {
  default: [],
  test: [
    'mochaTest',
  ],
  cover: [
    'mocha_istanbul',
  ],
  frontend: [
    'browserify:frontend-wct',
    'shell:shell-wct',
  ],
};
