import activeWin from 'active-win';

import { window } from './main';
import { INTERVAL_TIME } from './config';

let interval: NodeJS.Timeout | null = null;

/**
 * Starts the interval to check for active windows
 */
const start = () => {
  if (!interval) {
    interval = setInterval(send, INTERVAL_TIME);
  }
};
/**
 * Stops the interval to check for active windows
 */
const stop = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

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
    const timestamp = Date.now();
    window.webContents.send('ACTIVE_WINDOW_SUBSCRIBE', {
      ...result,
      timestamp,
    });
  }
};

const activeWindow = {
  getCurrent,
  getAll,
  send,
  interval: {
    start,
    stop,
  },
};
export default activeWindow;
