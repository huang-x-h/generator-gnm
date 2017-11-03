var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  initializing() {
    this.props = {}
  }

  prompting() {
    let prompts ={
      name: 'commandName',
      message: 'What is the command name of your module?'
    }

    return this.prompt(prompts).then((props) => {
      this.props.commandName = props.commandName
    })
  }

  default() {
    this.composeWith(requrie.resolve('../app'), { options: { cli: true, commandName: this.commandName }});
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('cli.js'),
      this.destinationPath('cli.js'),
      this.props
    )
  }

  end() {
    this.npmInstall(['commander'], { 'save': true })
  }
}
