const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    structure() {
      const self = this;

      this.log(yosay(
        'Create Folder Structure'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'selectedProject',
        message: 'Which Project do you use?',
        choices: ['Project'],
        default: ['Project'],
        when: () => !self.config.get('selectedProject'),
      }])
      .then(answers => {
        self.selectedProject = self.config.get('selectedProject') || answers.selectedProject;
      });
    },
  },
  writing() {
    // Project
    if (_includes(this.selectedProject, 'Project')) {
      this.log('Configuring Initial Structre for Project');
      this.fs.copyTpl(
        this.templatePath('**'),
        this.destinationPath('./'), {}
      );
    }
  },
});
