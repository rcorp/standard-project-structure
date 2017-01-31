const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _merge = require('lodash/merge');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    browserify() {
      const self = this;

      this.log(yosay(
        'Installing Browserify using create Bundle'
      ));
      return this.prompt([{
        type: 'input',
        name: 'bundleFile',
        message: 'which created bundle file?',
        default: 'src/main.js',
        when: () => !self.config.get('bundleFile'),
      }])
      .then(answers => {
        self.bundleFile = self.config.get('bundleFile') || answers.bundleFile;
      });
    },
  },
  writing() {
    // Read a package.json if it exists or create it
    const packageJSON = this.fs.readJSON(this.destinationPath('package.json'), {});

    // Read a aliases.js if it exists or create it
    let aliasesJS = require(this.destinationPath('./grunt/aliases.js'));
    // CodeCept
    this.log('Configuring for Browserify');
    // Convert JSON to an indented JS module.
    aliasesJS = 'module.exports=' + JSON.stringify(_merge(aliasesJS, {
      default: [],
      bundle: [
        'browserify',
      ],
    }), null, 2);
    _merge(packageJSON, {
      devDependencies: {
        'grunt-browserify': '^5.0.0',
      },
    });
    this.fs.write(this.destinationPath('grunt/aliases.js'), aliasesJS);
    this.fs.copyTpl(
         this.templatePath('grunt/browserify.js'),
         this.destinationPath('./grunt/browserify.js'),
         { fileName: this.bundleFile }
       );
    this.log('Writing to package.json');
    this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);
    this.installDependencies();
  },
});
