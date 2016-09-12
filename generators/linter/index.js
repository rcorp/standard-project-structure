const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _merge = require('lodash/merge');
const _union = require('lodash/union');
const _includes = require('lodash/includes');

module.exports = yeoman.Base.extend({
  prompting: {
    languages() {
      const self = this;

      this.log(yosay(
        'Installing Linters for your code'
      ));
      return this.prompt([{
        type: 'checkbox',
        name: 'selectedLanguages',
        message: 'Which Languages do you use?',
        choices: ['JavaScript', 'HTML', 'CSS', 'TypeScript'],
        default: ['JavaScript', 'HTML', 'CSS'],
        when: () => !self.config.get('selectedLanguages'),
      }, {
        type: 'checkbox',
        name: 'selectedEditors',
        message: 'Which Editors do you want to configure?',
        choices: ['Atom', 'VS Code'],
        default: ['Atom'],
        when: () => !self.config.get('selectedEditors'),
      }])
      .then(answers => {
        self.selectedLanguages = self.config.get('selectedLanguages') || answers.selectedLanguages;
        self.selectedEditors = self.config.get('selectedEditors') || answers.selectedEditors;
      });
    },
  },

  writing() {
    const packageJSON = this.fs.readJSON(this.destinationPath('package.json'), {});
    let atomPackages = _includes(this.selectedEditors, 'Atom') ?
      this.fs.read(this.destinationPath('atom-packages.txt'), { defaults: '' }).split('\n') : null;

    if (_includes(this.selectedLanguages, 'JavaScript')) {
      this.log('Configuring ESLint for Linting JavaScript');
      _merge(packageJSON, {
        devDependencies: {
          eslint: '^3.4.0',
          'eslint-config-airbnb': '^10.0.1',
          'eslint-plugin-import': '^1.14.0',
          'eslint-plugin-react': '^6.2.0',
          'eslint-plugin-jsx-a11y': '^2.2.1',
        },
      });
      if (_includes(this.selectedEditors, 'Atom')) {
        atomPackages = _union(atomPackages, ['linter-eslint']);
      }
    }
    if (_includes(this.selectedLanguages, 'CSS')) {
      this.log('Configuring StyleLint for Linting CSS');
      _merge(packageJSON, {
        devDependencies: {
          stylelint: '^7.2.0',
          'stylelint-config-standard': '^13.0.0',
        },
      });
      if (_includes(this.selectedEditors, 'Atom')) {
        atomPackages = _union(atomPackages, ['linter-stylelint']);
      }
    }
    if (_includes(this.selectedLanguages, 'HTML')) {
      this.log('Configuring HTMLHint for Linting HTML');
      _merge(packageJSON, {
        devDependencies: {
          htmlhint: '^0.9.13',
        },
      });
      if (_includes(this.selectedEditors, 'Atom')) {
        atomPackages = _union(atomPackages, ['linter-htmlhint']);
      }

      // TODO: Add Rules config file
    }
    if (_includes(this.selectedLanguages, 'TypeScript')) {
      this.log('Configuring TSLint for TypeScript');
      _merge(packageJSON, {
        devDependencies: {
          typescript: '^1.8.10',
          'tslint-microsoft-contrib': '^2.0.10',
        },
      });
      if (_includes(this.selectedEditors, 'Atom')) {
        atomPackages = _union(atomPackages, ['linter-tslint']);
      }
    }

    this.log('Writing to package.json');
    this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);

    this.log('Writing .editorconfig');
    this.fs.copyTpl(
      this.templatePath('.editorconfig'),
      this.destinationPath('./.editorconfig'), {}
    );
    if (_includes(this.selectedEditors, 'Atom')) {
      atomPackages = _union(atomPackages, ['editorconfig']);

      this.log('Writing to atom-packages.txt');
      this.fs.write(this.destinationPath('atom-packages.txt'), atomPackages.join('\n'));
    }
  },

  install() {
    if (_includes(this.selectedEditors, 'Atom')) {
      this.log('Installing Atom Linter Plugins via apm.');
      this.spawnCommandSync('apm', ['install', '--packages-file', 'atom-packages.txt']);
    }

    this.installDependencies();
  },
});
