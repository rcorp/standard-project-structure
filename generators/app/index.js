const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _merge = require('lodash/merge');

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.composeWith('standard-project-structure:test', {}, {
      local: require.resolve('../test')
    });
    this.composeWith('standard-project-structure:linter', {}, {
      local: require.resolve('../linter')
    }); 
  },  
});
