import { join } from 'path';
import { app, BrowserWindow } from 'electron';

import { PUBLIC, DIST_ELECTRON, URL, DIST, titleBar } from './config';
import { addWindowHandlers, addIPCHandlers } from './handlers';
import activeWindow from './services/activeWindow';

export let window: BrowserWindow | null;

// Important files
const preload = join(DIST_ELECTRON, 'preload.js');
const indexHTML = join(DIST, 'index.html');

function createWindow() {
  window = new BrowserWindow({
    icon: join(PUBLIC, 'vite.svg'),
    webPreferences: {
      contextIsolation: true,
      preload,
    },
    ...titleBar,
  });

  if (URL) window.loadURL(URL);
  else window.loadFile(indexHTML);

  addWindowHandlers(window);
  addIPCHandlers();
}

app.whenReady().then(() => {
  createWindow();

  activeWindow.interval.start();
});
