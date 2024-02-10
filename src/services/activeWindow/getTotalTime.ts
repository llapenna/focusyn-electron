import { INTERVAL_TIME } from '@/shared/config';
import { Grouped } from '@/shared/types/activeWindow';

import type { FilterBy, WindowGrouping } from './types';

/**
 * Checks if the array is grouped or not.
 * @param arr Array containing the list of active windows.
 * @returns `true` if the array is grouped, `false` otherwise.
 */
const isGrouped = (arr: WindowGrouping): arr is Grouped[] =>
  !!arr[0] && 'group' in arr[0];

/**
 * Filters the array by active, idle or both windows.
 * @param arr Array containing the list of active windows
 * @param include If `'active'`, only active windows will be included. If `'idle'`, only idle windows will be included. If `'both'`, both active and idle windows will be included.
 * @returns The filtered array.
 */
const filterBy = (
  arr: WindowGrouping,
  include: FilterBy = 'both'
): WindowGrouping => {
  if (include === 'both') return arr;
  // Include idle or active windows
  else
    return arr.filter(({ owner }) =>
      include === 'idle' ? owner.name === 'Idle' : owner.name !== 'Idle'
    );
};

/**
 * Calculates the total time of all active windows.
 * @param arr Array containing the list of active windows
 * @param include If `'active'`, only active windows will be included. If `'idle'`, only idle windows will be included. If `'both'`, both active and idle windows will be included.
 * @returns Total time number in milliseconds
 */
export const getTotalTime = (
  arr: WindowGrouping,
  include: FilterBy = 'both'
): number => {
  const filtered = filterBy(arr, include);

  if (isGrouped(filtered)) {
    // TODO: Check if the type being Grouped[] | Grouped[] affects the app
    return filtered.reduce(
      (acc, { group }) => acc + group.count * INTERVAL_TIME,
      0
    );
  } else {
    return filtered.length * INTERVAL_TIME;
  }
};
