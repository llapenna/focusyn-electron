import { BrowserWindow, app, ipcMain } from 'electron';

import activeWindow from './activeWindow';
import { IS_DEV } from './config';

/**
 * Adds handlers to the Electron App
 * @param window Current window
 */
export const addWindowHandlers = (window: BrowserWindow | null) => {
  if (IS_DEV) window?.webContents.openDevTools();

  // On Windows and Linux, exiting all windows generally quits an application entirely.
  // On macOS however, exiting all windows does not quit an application
  // https://www.electronjs.org/docs/latest/api/app#event-window-all-closed
  app.on('window-all-closed', () => {
    window = null;
    // TODO: quit the app on windows/linux, but not on mac
    app.quit();
  });

  // Focus on the main window if the user tried to open another
  // https://www.electronjs.org/docs/latest/api/app#event-second-instance
  app.on('second-instance', () => {
    if (window) {
      if (window.isMinimized()) window.restore();
      window.focus();
    }
  });

  // Stop the active-window check interval when the app is quitting
  app.on('quit', () => {
    activeWindow.interval.stop();
  });
};

/**
 * Add IPC handlers to the Electron App. These handlers are used to communicate
 * between the main process and the renderer process.
 */
export const addIPCHandlers = () => {
  ipcMain.handle('ACTIVE_WINDOW_CURRENT', () => activeWindow.getCurrent());
};
