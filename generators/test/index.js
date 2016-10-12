const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    mocha() {
      const self = this;

      this.log(yosay(
        'Installing Testing frameworks'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'selectedTestFramework',
        message: 'Which Framework do you use?',
        choices: ['Mocha'],
        default: ['Mocha'],
        when: () => !self.config.get('selectedTestFramework'),
      }])
      .then(answers => {
        self.selectedTestFramework = self.config.get('selectedTestFramework') ||
        answers.selectedTestFramework;
      });
    },
  },
  writing() {
    // Mocha
    if (_includes(this.selectedTestFramework, 'Mocha')) {
      this.log('Configuring default options for mocha');
      this.fs.copyTpl(
         this.templatePath('mocha.opts'),
         this.destinationPath('./test/mocha.opts'), {}
       );
    }
  },
});
