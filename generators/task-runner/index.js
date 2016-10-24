const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _merge = require('lodash/merge');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    taskrunner() {
      const self = this;

      this.log(yosay(
        'Configure Task Runner'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'selectedTaskRunner',
        message: 'Which Task Runner do you want to configure?',
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
    // Read a package.json if it exists or create it
    const packageJSON = this.fs.readJSON(this.destinationPath('package.json'), {});
    if (_includes(this.selectedTaskRunner, 'Grunt')) {
      this.log('Configuring Gruntfile for Task Runner');
      _merge(packageJSON, {
        devDependencies: {
          grunt: '^1.0.1',
          'load-grunt-config': '^0.19.2',
        },
      });
      this.log('Creating a Gruntfile');
      this.fs.copyTpl(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('./Gruntfile.js'), {}
      );
      this.log('Creating an alias file for grunt');
      this.fs.copyTpl(
        this.templatePath('grunt/aliases.js'),
        this.destinationPath('./grunt/aliases.js'), {}
      );
    }
    this.log('Writing to package.json');
    this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);
    this.installDependencies();
  },
});
