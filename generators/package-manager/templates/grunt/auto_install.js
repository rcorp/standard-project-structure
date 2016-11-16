module.exports = {
  'npm-install': {
    options: {
      stdout: true,
      stderr: true,
      failOnError: true,
      bower: false,
      npm: true,
    },
  },
  'bower-install': {
    options: {
      stderr: false,
      failOnError: false,
      npm: false,
      bower: '--allow-root',
    },
  },
};
