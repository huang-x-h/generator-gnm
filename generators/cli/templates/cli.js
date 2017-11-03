#! /usr/bin/env node

var program = require('commander');
var cli = require('./index');

program
  .version('0.1.0')
  .command('<%= commandName %>')
  .parse(process.argv);

cli(program);
