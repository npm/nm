'use strict'
require('@iarna/cli')(require('./index.js'))
  .usage('nm <cmd> <args…>')
  .command({
    command: 'rm <pkg>',
    desc: 'remove a package'
  })
  .demandCommand()
  .help()