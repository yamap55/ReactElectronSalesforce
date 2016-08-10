'use strict';
//const Menu = electron.Menu;
const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
//  クラッシュレポート
//electron.crashReporter.start();
let mainWindow;

// 全てのウィンドウが閉じたらアプリケーションを終了します。
app.on('window-all-closed', function() {
    app.quit();
});
// アプリケーションの初期化が完了したら呼び出されます。
app.on('ready', function() {
  // メインウィンドウを作成します。
  mainWindow = new BrowserWindow({width: 1000, height: 900});
  // メインウィンドウに表示するURLを指定します。
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
