#! /usr/bin/env node

var program = require('commander');
var cli = require('./index');

program
  .version('1.0.0')
  .command('<%= commandName %>')
  .parse(process.argv);

cli(program);
