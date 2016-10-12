const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    mocha() {
      const self = this;

      this.log(yosay(
        'Add Testing Framework for test cases'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'selectedFramework',
        message: 'Which Framework do you use?',
        choices: ['Mocha'],
        default: ['Mocha'],
        when: () => !self.config.get('selectedFramework'),
      }])
      .then(answers => {
        self.selectedFramework = self.config.get('selectedFramework') || answers.selectedFramework;
      });
    },
  },
  /**
   * Finally runs an npm install as well as installs plugins for editors.
   */
  writing() {
    // Mocha
    if (_includes(this.selectedFramework, 'Mocha')) {
      this.log('Configuring Mocha for mocha test cases');
      this.fs.copyTpl(
         this.templatePath('mocha.opts'),
         this.destinationPath('./test/mocha.opts'), {}
       );
    }
  },
});
