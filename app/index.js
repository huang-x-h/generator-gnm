'use strict';

const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  initializing: function() {
    this.cli = this.options.cli
    this.commandName = this.options.commandName
  },

  prompting: function() {
    this.log('You\'re using the npm module generator.')

    let prompts = [
      {
        name: 'moduleName',
        message: 'What is the name of your module?',
        default: this.appname
      },
      {
        name: 'moduleDescription',
        message: 'What is the description of the module?'
      },
      {
        name: 'authorName',
        message: 'What is your github user name?',
        store: true
      },
      {
        name: 'fullName',
        message: 'What is your name?',
        store: true
      },
      {
        name: 'emailAddress',
        message: 'What is your email address?',
        store: true
      }]

    return this.prompt(prompts).then((answers) => {
      this.moduleName = answers.moduleName
      this.moduleDescription = answers.moduleDescription
      this.authorName = answers.authorName
      this.fullName = answers.fullName
      this.emailAddress = answers.emailAddress
    })
  },

  writing: function() {
    this.template('_package.json', 'package.json')
    this.template('_README.md', 'README.md')
    this.copy('gitignore', '.gitignore')
    this.copy('gitattributes', '.gitattributes')
    this.copy('editorconfig', '.editorconfig')
    this.copy('index.js', 'index.js')
    this.copy('test.js', 'test.js')
    this.copy('jsdoc-conf.json', 'jsdoc-conf.json')
    this.copy('editorconfig', '.editorconfig')
  }
})
