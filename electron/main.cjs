const { menubar } = require('menubar')
const path = require('path')
const isDev = require('electron-is-dev')

const mb = menubar({
  index: isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`,
})

mb.on('ready', () => {
  console.log('Application is ready.')
})
