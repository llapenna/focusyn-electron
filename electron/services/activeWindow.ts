import activeWin from 'active-win';
import { powerMonitor } from 'electron';

import { IDLE_TIME, INTERVAL_TIME } from '@/shared/config';
import { ActiveWindow } from '@/shared/types/activeWindow';

import { window } from '../main';

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
 * Gets the current active window
 * @returns Active window
 */
const getCurrentWindow = () => {
  return activeWin();
};

/**
 * Generates a fake idle state window
 * @returns Idle state window
 */
const generateIdleState = (): ActiveWindow.IdleResult => ({
  title: 'Idle',
  timestamp: Date.now(),
  owner: {
    name: 'Idle',
    processId: 0,
  },
  id: 0,
  bounds: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  memoryUsage: 0,
});

/**
 * Sends the current active window to the renderer (React) process
 */
const send = async (): Promise<void> => {
  if (window) {
    const isIdle = powerMonitor.getSystemIdleState(IDLE_TIME) === 'idle';

    if (isIdle)
      window.webContents.send('ACTIVE_WINDOW_SUBSCRIBE', generateIdleState());
    else {
      const result = await getCurrentWindow();
      const win = { ...result, timestamp: Date.now() };

      if (result) window.webContents.send('ACTIVE_WINDOW_SUBSCRIBE', win);
    }
  }
};

const activeWindow = {
  getCurrent: getCurrentWindow,
  send,
  interval: {
    start,
    stop,
  },
};
export default activeWindow;
