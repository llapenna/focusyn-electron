import { INTERVAL_TIME } from '@/shared/config';
import { Grouped } from '@/shared/types/activeWindow';

import type { FilterBy } from './types';
import { filterBy } from './filterBy';

/**
 * Calculates the total time of all active windows.
 * @param arr Array containing the list of active windows
 * @param include `All` | `Active` | `Idle` | `Focus`.
 * @returns Total time number in milliseconds
 */
export const getTotalTime = (
  arr: Grouped[],
  include: FilterBy = 'All'
): number => {
  const filtered = filterBy(arr, include);

  return filtered.reduce(
    (acc, { group }) => acc + group.count * INTERVAL_TIME,
    0
  );
};
