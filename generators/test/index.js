const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _merge = require('lodash/merge');

module.exports = yeoman.Base.extend({
  prompting: {
    languages: function () {
      // this.config.set('selectedLanguages', ["Javascript"]);
      // this.config.set('selectedEditors', ["VS Code"]);
    

      // Have Yeoman greet the user.
      this.log(yosay(
        'Configuring Unit Test Structure'
      ));
    },
  },

  writing: function () {
    
  },

  install: function () {
    // this.installDependencies();
  },
});
