const { menubar } = require('menubar')
const path = require('path')
const isDev = require('electron-is-dev')

const app = menubar({
  browserWindow: {
    width: 400,
    height: 500,
  },

  index: isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`,
})

app.on('ready', () => {
  console.log('Application is ready.')
})
