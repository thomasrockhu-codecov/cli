const os = require('os')

const boxen = require('boxen')

const { chalk, log } = require('../command-helpers')

const { getShellInfo, isBinInPath } = require('./install')

/**
 * @param {boolean} force
 */
const printBanner = function (force) {
  const print = force || !isBinInPath()
  const platform = os.platform()

  if (print && platform !== 'win32') {
    const { incFilePath } = getShellInfo()
    const banner = chalk.bold(
      `Run this command to use Netlify Large Media in your current shell\n\nsource ${incFilePath}`,
    )

    log(boxen(banner, { padding: 1, margin: 1, align: 'center', borderColor: '#00c7b7' }))
  }
}

module.exports = { printBanner }
