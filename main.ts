import { app, BrowserWindow } from 'electron';
import { getDeviceList, Device } from 'usb';
import * as fs from 'fs';
import * as path from 'path';
import usb = require('usb/dist/usb');

let mainWindow: BrowserWindow | null = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');


function listUSBDevices(): void {
  const devices: Device[] = getDeviceList();

  // 将设备列表转换为字符串
  const deviceListString = JSON.stringify(devices);

  // 写入设备列表到一个临时文件
  const tempFilePath = path.join(__dirname, 'temp', 'deviceList.json');
  fs.writeFileSync(tempFilePath, deviceListString);

  // 读取并发送临时文件到 HTML 页面
  const htmlFilePath = path.join(__dirname, 'index.html');
  let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
  htmlContent = htmlContent.replace(
    '<script>',
    '<script>updateDeviceList(' + deviceListString + ');'
  );
  fs.writeFileSync(htmlFilePath, htmlContent);

  // 在终端打印设备列表
  console.log(devices);
}

// 调用函数列出检测到的 USB 设备
listUSBDevices();

const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow();

  // 加载修改后的 index.html 文件
  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

}
)
