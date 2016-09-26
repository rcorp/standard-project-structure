const yeoman = require('yeoman-generator');
const yosay = require('yosay');

module.exports = yeoman.Base.extend({
  initializing() {
    this.log(yosay(
      'Welcome to Standard Project Structure! :)'
    ));
    this.composeWith('standard-project-structure:linter', {}, {
      local: require.resolve('../linter'),
    });
  },
});
