'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let window = null;

app.on('window-all-closed', () => {
    if(process.platform != 'darwin') app.quit();
});

app.on('ready', () => {
    window = new BrowserWindow({
        useContentSize: true,
        width: 1280,
        height: 720,
        resizable: false,
        fullscreen: false,
        webPreferences: { nodeIntegration: true }
    });
    // window.setMenu(null);
    window.loadURL(`file://${__dirname}/index.html`);
    window.on('closed', () => { window = null; });
});