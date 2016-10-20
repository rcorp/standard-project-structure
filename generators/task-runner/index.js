const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    taskrunner() {
      const self = this;

      this.log(yosay(
        'Configure Task Runner for Grunt'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'selectedTaskRunner',
        message: 'Which Task Runner do you use?',
        choices: ['Grunt'],
        default: ['Grunt'],
        when: () => !self.config.get('selectedTaskRunner'),
      }])
      .then(answers => {
        self.selectedTaskRunner = self.config.get('selectedTaskRunner') ||
        answers.selectedTaskRunner;
      });
    },
  },
  writing() {
    // Task Runner
    if (_includes(this.selectedTaskRunner, 'Grunt')) {
      this.log('Configuring Gruntfile for Task Runner');
      this.fs.copyTpl(
        this.templatePath('grunt/aliases.js'),
        this.destinationPath('./grunt/aliases.js'), {}
      );
      this.fs.copyTpl(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('./Gruntfile.js'), {}
      );
    }
  },
});
