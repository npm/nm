module.exports = main
module.exports.rm = rm

const Bluebird = require('bluebird')
const lstat = Bluebird.promisify(require('fs').lstat)
const rimraf = Bluebird.promisify(require('rimraf'))

function main (opts, cmd) {
  return Bluebird.try(() => {
    if (cmd === 'rm') {
      return rm(opts)
    } else {
      require('yargs').showHelp()
      throw 'Unknown command: ' + cmd
    }
  })
}

function rm (opts) {
  const pkgpath = 'node_modules/' + opts.pkg
  return Bluebird.try(() => {
    return lstat(pkgpath)
  }).then(() => {
    return rimraf(pkgpath)
  }).then(() => {
    console.log(opts.pkg, 'removed')
  })
}
