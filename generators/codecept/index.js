const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _merge = require('lodash/merge');
const _includes = require('lodash/includes');
const chalk = require('chalk');

module.exports = yeoman.Base.extend({
  prompting: {
    codecept() {
      const self = this;

      this.log(yosay(
        'Installing Functional Testing framework'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'selectedTestFramework',
        message: 'Which Framework do you use?',
        choices: ['CodeCept'],
        default: ['CodeCept'],
        when: () => !self.config.get('selectedTestFramework'),
      }])
      .then(answers => {
        self.selectedTestFramework = self.config.get('selectedTestFramework') ||
        answers.selectedTestFramework;
      });
    },
  },
  writing() {
    // Read a package.json if it exists or create it
    const packageJSON = this.fs.readJSON(this.destinationPath('package.json'), {});

    // Read a aliases.js if it exists or create it
    if (!this.fs.exists(this.destinationPath('./grunt/shell.js'))) {
      this.fs.copyTpl(
          this.templatePath('grunt/shell.js'),
          this.destinationPath('./grunt/shell.js'), {}
        );
    }
    let aliasesJS = require(this.destinationPath('./grunt/aliases.js'));
    let shellJS = require(this.destinationPath('./grunt/shell.js'));
    // CodeCept
    if (_includes(this.selectedTestFramework, 'CodeCept')) {
      this.log('Configuring default options for codecept');
      // Convert JSON to an indented JS module.
      aliasesJS = 'module.exports=' + JSON.stringify(_merge(aliasesJS, {
        default: [],
        'code-shell': [
          'shell:code-shell',
        ],
        'code-run': [
          'shell:code-run',
        ],
      }), null, 2);
      shellJS = 'module.exports=' + JSON.stringify(_merge(shellJS, {
        'code-shell': {
          command: './node_modules/.bin/codeceptjs shell',
        },
        'code-run': {
          command: './node_modules/.bin/codeceptjs run --steps',
        },
      }), null, 2);
      _merge(packageJSON, {
        devDependencies: {
          codeceptjs: '^0.4.13',
        },
      });
      this.fs.write(this.destinationPath('grunt/aliases.js'), aliasesJS);
      this.fs.copyTpl(
          this.templatePath('grunt/shell.js'),
          this.destinationPath('./grunt/shell.js'), {}
        );
    }
    this.log(chalk.bold.yellow(
      'Before running test we should ensure that Selenium Server is running' +
      '\nDownload Selenium Standalone Server') + chalk.bold.red(
      '\nhttp://docs.seleniumhq.org/download/') + chalk.bold.yellow(
      '\nAfter that launch using this command' +
      '\njava -jar selenium-server-standalone-x.xx.xxx.jar'
    ));
    this.log('Writing to package.json');
    this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);
    this.installDependencies();
  },
});
