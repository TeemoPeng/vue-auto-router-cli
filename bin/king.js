#!/usr/bin/env node

const program = require('commander') // 引入命令行依赖

program.version(require('../package.json').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))

program.parse(process.argv) // 解析