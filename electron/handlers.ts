import { BrowserWindow, app, ipcMain } from 'electron';

import activeWindow from './activeWindow';

/**
 * Adds handlers to the Electron App
 * @param window Current window
 */
export const addWindowHandlers = (window: BrowserWindow | null) => {
  // On Windows and Linux, exiting all windows generally quits an application entirely.
  // On macOS however, exiting all windows does not quit an application
  // https://www.electronjs.org/docs/latest/api/app#event-window-all-closed
  app.on('window-all-closed', () => {
    window = null;
    if (process.platform !== 'darwin') app.quit();
  });

  // Focus on the main window if the user tried to open another
  // https://www.electronjs.org/docs/latest/api/app#event-second-instance
  app.on('second-instance', () => {
    if (window) {
      if (window.isMinimized()) window.restore();
      window.focus();
    }
  });
};

/**
 * Add IPC handlers to the Electron App. These handlers are used to communicate
 * between the main process and the renderer process.
 */
export const addIPCHandlers = () => {
  ipcMain.handle('GET_CURRENT_WINDOW', () => activeWindow.getCurrent());
  ipcMain.handle('GET_ALL_WINDOWS', () => activeWindow.getAll());
};
