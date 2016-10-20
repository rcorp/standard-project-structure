const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    structure() {
      const self = this;
      this.log(yosay(
        'Create Basi Folder Structure'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'basicFolderStructure',
        message: 'Which Project do you use?',
        choices: ['Project'],
        default: ['Project'],
        when: () => !self.config.get('basicFolderStructure'),
      }])
      .then(answers => {
        self.basicFolderStructure = self.config.get('basicFolderStructure') ||
        answers.basicFolderStructure;
      });
    },
  },
  writing() {
    // Project
    if (_includes(this.basicFolderStructure, 'Project')) {
      this.log('Configuring Basic Folder Structre');
      this.fs.copyTpl(
        this.templatePath('**'),
        this.destinationPath('./'), {}
      );
    }
  },
});
