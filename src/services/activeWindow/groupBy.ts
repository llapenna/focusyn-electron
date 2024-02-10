import iteratee from 'lodash-es/iteratee';

import { Grouped } from '@/shared/types/activeWindow';
import type {
  GroupByArgs,
  GetComparedEntryFunction,
  GroupByFunction,
} from './types';

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
export const groupBy: GroupByFunction = (
  arr,
  { by = 'title', consecutive = false }
) => {
  const result: Grouped[] = [];

  for (const window of arr) {
    const compared = getComparedEntry(result, window, { by, consecutive });

    // If the entry already exists, increment the count
    if (compared) compared.group.count++;
    else result.push({ ...window, group: { count: 1, by } });
  }

  return result;
};
