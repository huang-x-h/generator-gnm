'use strict';

const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  prompting: function() {
    let prompts ={
      name: 'commandName',
      message: 'What is the command name of your module?'
    }

    return this.prompt(prompts).then((props) => {
      this.commandName = props.commandName
    })
  },

  default: function() {
    this.composeWith('gnm', { options: { cli: true, commandName: this.commandName }});
  },
  
  writing: function() {
    this.template('_cli.js', 'cli.js')
  }
})
