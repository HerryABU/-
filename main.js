const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false // 禁用web安全策略以允许加载本地字体
    }
  })

  // 加载index.html文件
  win.loadFile(path.join(__dirname, 'src/index.html'))
  
  // 开发工具
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)