(function () {
  'use strict';

  var chalk = require('chalk');
  var lodash = require('lodash');
  var path = require('path');
  var yeoman = require('yeoman-generator');
  var yosay = require('yosay');

  module.exports = yeoman.generators.Base.extend({
    constructor: function () {
      yeoman.generators.Base.apply(this, arguments);
      // add option to skip install
      this.option('skip-install');
      this.argument('appname', {
        type: String,
        required: false
      });
      var appName = this.appname || path.basename(process.cwd());
      this.appname = lodash.kebabCase(appName);
      this.modulename = lodash.snakeCase(appName);
      this.classname = lodash.capitalize(lodash.camelCase(appName));
    },

    prompting: function () {
      // yeoman greeting
      this.log(yosay(
        'Yo! I\'m here to help build your ' +
        chalk.bold.yellow('Angular2 with TypeScript') +
        ' application.'
      ));
    },

    writing: {
      app: function () {
        this.basicTemplate = 'src/' + lodash.kebabCase(this.appname);

        this.copy('_package.json', 'package.json');
        this.copy('_gulpfile.js', 'gulpfile.js');
        this.copy('_readme.md', 'readme.md');
        this.copy('_editorconfig', '.editorconfig');
        this.copy('_gitignore', '.gitignore');

        this.copy('src/_index.js', 'src/index.js');
        this.copy('src/_index.html', 'src/index.html');
        this.copy('src/_basic-template.html', this.basicTemplate + '.html');
        this.copy('src/_basic-template.js', this.basicTemplate + '.js');
      }
    },

    install: function () {
      this.installDependencies({
        skipInstall: this.options['skip-install'],
        bower: false,
        callback: function () {
          this.emit('dependenciesInstalled');
        }.bind(this)
      });

      this.on('dependenciesInstalled', function () {
        this.spawnCommand('./node_modules/.bin/gulp').on('close', function () {
          this.log('');
          this.log('');
          this.log('Setup complete, run ' +
            chalk.bold.yellow('npm start') +
            ' to start serving the application' +
            ' (it\'ll also start watching for any changes you make).');
          this.log('');
        }.bind(this));
      }.bind(this));

    }
  });

})();