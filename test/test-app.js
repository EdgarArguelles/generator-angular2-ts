'use strict';

var path = require('path'),
  assert = require('yeoman-generator').assert,
  helpers = require('yeoman-generator').test,
  os = require('os');

describe('when angular2 generator generates', function () {

  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './foo'))
      // always skip install in tests
      .withOptions({
        'skip-install': true
      })
      .on('end', done);
  });

  it('should create the required static files', function () {
    assert.file([
      '.editorconfig',
      '.gitignore',
      'gulpfile.js',
      'karma.conf.js',
      'LICENSE',
      'package.json',
      'README.md',
      'test-main.js',
      'tsconfig.json',
      'tsd.json',
      'src/app/components/header/header.html',
      'src/app/components/header/header.spec.ts',
      'src/app/components/header/header.ts',
      'src/app/config/local.env.sample.ts',
      'src/app/config/paths.ts',
      'src/app/pages/app/app.html',
      'src/app/pages/app/app.ts',
      'src/app/pages/app/app.ts',
      'src/app/bootstrap.ts',
      'src/index.html'
    ]);
  });
});
