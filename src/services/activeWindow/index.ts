import iteratee from 'lodash-es/iteratee';

import type { ActiveWindow } from '@/shared/types/activeWindow';
import { INTERVAL_TIME } from '@/shared/config';
import { msToSeg, segToMs } from '@/shared/time';
import checkPreload from '@/reactapp/utils/checkPreload';
import { getFormattedTime } from '@/reactapp/utils/time';

import type {
  GroupByFunction,
  GroupByArgs,
  GetComparedEntryFunction,
} from './types';

/**
 * Calculates the total time of all active windows, excluding the idle time
 * @param arr Array containing the list of active windows
 * @returns Total time formatted in hh:mm:ss
 */
const getTotalTime = (arr: ActiveWindow.Result[]): string => {
  const time =
    arr.filter((item) => item.owner.name !== 'Idle').length *
    msToSeg(INTERVAL_TIME);

  const ms = segToMs(time);
  return getFormattedTime(ms);
};

/**
 * Listen for active-window messages from the main process
 * @param callback Code to execute on each received IPC message
 */
const subscribe = (callback: ActiveWindow.Callback) => {
  const api = checkPreload<Window['activeWindow']>('activeWindow');
  api.subscribe(callback);
};

/**
 * Compares two windows by a given property
 * @param a First window to compare
 * @param b Second window to compare
 * @param key Window's property to compare
 * @returns `true` if both windows have the same value for the given property, `false` otherwise
 */
const compare = (
  a: object | undefined,
  b: object | undefined,
  key: Required<GroupByArgs>['by']
) => {
  const getValue = iteratee(key);
  return getValue(a) === getValue(b);
};

/**
 * Looks for a matching entry in a given array of grouped windows. If the entry is found, it returns it. Otherwise, it returns `null`
 * @param arr Collection of grouped windows
 * @param current Current window to compare
 * @param by Property to group by. Defaults to 'title'
 * @param consecutive If `true`, only consecutive windows will be grouped. Defaults to `false`
 * @returns The last matching entry if consecutive is `true` and the matching entry if consecutive is `false`. `null` otherwise
 */
const getComparedEntry: GetComparedEntryFunction = (
  arr,
  current,
  { by, consecutive }
) => {
  if (consecutive) {
    const last = arr.at(-1);
    const comparison = compare(current, last, by);

    // Return the last entry if it's the same as the current one
    if (last && comparison) return last;
    else return null;
  } else {
    return arr.find((item) => compare(item, current, by)) ?? null;
  }
};

/**
 * Groups the active windows by a given property and if they are consecutive or not
 * @param arr List of active windows for the current session
 * @param by Property to group by. Defaults to 'title'
 * @param consecutive If `true`, only consecutive windows will be grouped. Defaults to `false`
 * @returns List of grouped windows, with the number of times they were active
 */
const groupBy: GroupByFunction = (
  arr,
  { by = 'title', consecutive = false }
) => {
  const result: ActiveWindow.Grouped[] = [];

  for (const window of arr) {
    const compared = getComparedEntry(result, window, { by, consecutive });

    // If the entry already exists, increment the count
    if (compared) compared.group.count++;
    else result.push({ ...window, group: { count: 1, by } });
  }

  return result;
};

const activeWindow = {
  groupBy,
  subscribe,
  getTotalTime,
};
export default activeWindow;
