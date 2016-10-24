'use strict';

const app = require('../app')

module.exports = app.extend({
  asking: function() {
    let done = this.async()

    let prompts = [
      {
        name: 'commandName',
        message: 'What is the command name of your module?'
      }]

    this.prompt(prompts, (props) => {
      this.commandName = props.commandName
      done()
    })
  },
  writing: function() {
    this.template('_cli.js', 'cli.js')
  }
})
