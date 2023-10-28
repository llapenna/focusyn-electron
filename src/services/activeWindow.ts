import countBy from 'lodash-es/countBy';
import mapValues from 'lodash-es/mapValues';

import type { ActiveWindow } from '@/shared/types/activeWindow';
import { INTERVAL_TIME } from '@/shared/config';
import { msToSeg } from '@/shared/time';

import checkPreload from '@/reactapp/utils/checkPreload';
import { getFormattedTime } from '@/reactapp/utils/time';

/**
 * Listen for active-window messages from the main process
 * @param callback Code to execute on each received IPC message
 */
const subscribe = (callback: ActiveWindow.Callback) => {
  const api = checkPreload<Window['activeWindow']>('activeWindow');
  api.subscribe(callback);
};

/**
 * Count the number of times each app was active and calculates the total time
 * @param arr Collection of active windows
 * @returns Object with the number of times each app was active
 */
const countByName = (arr: ActiveWindow.Result[]): Record<string, number> => {
  // Use the app name (not the window title)
  const grouped = countBy(arr, 'owner.name');
  return mapValues(grouped, (value) => msToSeg(value * INTERVAL_TIME));
};

/**
 * Calculates the total time of all active windows, excluding the idle time
 * @param arr Array containing the list of active windows
 * @returns Total time formatted in hh:mm:ss
 */
const getTotalTime = (arr: ActiveWindow.Result[]): string => {
  const time =
    arr.filter((item) => item.owner.name !== 'Idle').length * INTERVAL_TIME;

  return getFormattedTime(time);
};

const activeWindow = {
  subscribe,
  countByName,
  getTotalTime,
};
export default activeWindow;
