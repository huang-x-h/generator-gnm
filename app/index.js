'use strict';

const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  asking: function() {
    let done = this.async()

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

    this.prompt(prompts, (props) => {
      this.moduleName = props.moduleName
      this.moduleDescription = props.moduleDescription
      this.authorName = props.authorName
      this.fullName = props.fullName
      this.emailAddress = props.emailAddress
      done()
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
