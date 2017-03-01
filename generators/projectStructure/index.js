const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    structure() {
      const self = this;
      this.log(yosay(
        'Create General Project Structure'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'projectStructure',
        message: 'Which Project Structure do you use?',
        choices: ['Generic'],
        default: ['Generic'],
        when: () => !self.config.get('projectStructure'),
      }])
      .then(answers => {
        self.projectStructure = self.config.get('projectStructure') ||
        answers.projectStructure;
      });
    },
  },
  writing() {
    // Generic
    if (_includes(this.projectStructure, 'Generic')) {
      this.log('Configuring Generic Project Structure');
      this.fs.copyTpl(
        this.templatePath('**'),
        this.destinationPath('./'), {}
      );
      this.fs.copyTpl(
        this.templatePath('.gitignore'),
        this.destinationPath('./.gitignore'), {}
      );
    }
  },
});
