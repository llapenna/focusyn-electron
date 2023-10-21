import activeWin from 'active-win';
import { window } from './main';

/**
 * Gets a list of all open windows
 * @returns Array of all open windows
 */
const getAll = () => {
  return activeWin.getOpenWindows();
};

/**
 * Gets the current active window
 * @returns Active window
 */
const getCurrent = () => {
  return activeWin.sync();
};

/**
 * Sends the current active window to the renderer (React) process
 */
const send = (): void => {
  if (window) {
    const result = getCurrent();
    window.webContents.send('ACTIVE_WINDOW_SUBSCRIBE', result);
  }
};

const activeWindow = {
  getCurrent,
  getAll,
  send,
};
export default activeWindow;
