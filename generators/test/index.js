const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _merge = require('lodash/merge');
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
      }, {
        type: 'confirm',
        name: 'selectedCoverage',
        message: 'Would you like to enable coverage feature?',
      }, {
        type: 'confirm',
        name: 'selectedWCT',
        message: 'Would you like to enable WCT feature?',
      }])
      .then(answers => {
        self.selectedTestFramework = self.config.get('selectedTestFramework') ||
        answers.selectedTestFramework;
        self.selectedCoverage = self.config.get('selectedCoverage') || answers.selectedCoverage;
        self.selectedWCT = self.config.get('selectedWCT') || answers.selectedWCT;
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
    setTimeout ( ()=> {
      let shellJS = require(this.destinationPath('./grunt/shell.js'));
      let wct = require(this.destinationPath('./grunt/aliases.js'));
      let aliasesJS = require(this.destinationPath('./grunt/aliases.js'));
      let cover = require(this.destinationPath('./grunt/aliases.js'));
      // Mocha
      if (_includes(this.selectedTestFramework, 'Mocha')) {
        this.log('Configuring default options for mocha');
        // Convert JSON to an indented JS module.
        aliasesJS = 'module.exports=' + JSON.stringify(_merge(aliasesJS, {
          default: [],
          test: [
            'mochaTest',
          ],
        }), null, 2);
        _merge(packageJSON, {
          devDependencies: {
            'grunt-mocha-test': '^0.13.2',
            mocha: '^3.1.2',
          },
        });
        this.fs.write(this.destinationPath('grunt/aliases.js'), aliasesJS);
        this.fs.copyTpl(
           this.templatePath('mocha.opts'),
           this.destinationPath('./test/mocha.opts'), {}
         );
        this.fs.copy(
            this.templatePath('grunt/mochaTest.js'),
            this.destinationPath('./grunt/mochaTest.js'), {}
          );
        this.fs.copyTpl(
           this.templatePath('.eslintrc'),
           this.destinationPath('./test/.eslintrc'), {}
         );
      }
      if (this.selectedCoverage) {
        this.log('Configuring options for coverage');
        // Convert JSON to an indented JS module.
        cover = 'module.exports=' + JSON.stringify(_merge(cover, {
          default: [],
          cover: [
            'mocha_istanbul',
          ],
        }), null, 2);
        _merge(packageJSON, {
          devDependencies: {
            'grunt-mocha-istanbul': '^5.0.2',
          },
        });
        this.fs.copyTpl(
            this.templatePath('grunt/mocha_istanbul.js'),
            this.destinationPath('./grunt/mocha_istanbul.js'), {}
          );
        this.fs.write(this.destinationPath('grunt/aliases.js'), cover);
      }
      if (this.selectedWCT) {
        this.log('Configuring options for WCT');
        wct = 'module.exports=' + JSON.stringify(_merge(wct, {
          default: [],
          frontend: [
            'browserify:frontend-wct',
            'shell:shell-wct',
          ],
        }), null, 2);
        shellJS = 'module.exports=' + JSON.stringify(_merge(shellJS, {
          'shell-wct': {
            command: 'wct -b chrome test/spec/unit/bundle.js',
          },
        }), null, 2);
        _merge(packageJSON, {
          devDependencies: {
            'grunt-browserify': '^5.0.0',
            'grunt-shell': '^2.1.0',
          },
        });
        this.fs.copy(
           this.templatePath('grunt/browserify.js'),
           this.destinationPath('./grunt/browserify.js'), {}
         );
        this.fs.write(this.destinationPath('grunt/aliases.js'), aliasesJS);
      }
      this.log('Writing to package.json');
      this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);
      this.installDependencies();
    }, 2000)
  },
});
