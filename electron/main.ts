import { join } from 'path';
import { app, BrowserWindow } from 'electron';

import { PUBLIC, DIST_ELECTRON, URL, DIST } from './config';
import addHandlers from './handler';

let window: BrowserWindow | null;

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
  });

  if (URL) window.loadURL(URL);
  else window.loadFile(indexHTML);

  addHandlers(window);
}

app.whenReady().then(createWindow);
