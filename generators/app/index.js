var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  initializing() {
    this.props = {
      cli: this.options.cli,
      commandName: this.options.commandName
    };
  }

  prompting() {
    this.log('You\'re using the node module generator.');

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
      },
      {
        name: 'website',
        message: 'What is your site?',
        store: true
      }]

    return this.prompt(prompts).then(answers => {
      Object.assign(this.props, answers);
    })
  }

  writing() {
    ['.editorconfig', '.gitignore', '.gitattributes', 'index.js'].forEach(item =>  {
      this.fs.copy(
        this.templatePath(item),
        this.destinationPath(item)
      );
    });

    ['package.json', 'jsdoc-conf.json', 'README.md'].forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.props
      );
    });
  }

  end() {
    this.npmInstall(['ink-docstrap', 'jsdoc'], { 'save': true });
  }
}
