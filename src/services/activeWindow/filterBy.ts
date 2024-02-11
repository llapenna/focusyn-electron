import { FOCUS_COUNT_THRESHOLD } from '@/reactapp/utils/time';
import type { FilterBy } from './types';
import { Grouped } from '@/shared/types/activeWindow';
/**
 * Filters the array by active, idle, focus or all windows.
 * @param arr Array containing the list of active windows.
 * @param include `All` | `Active` | `Idle` | `Focus`.
 * @returns The filtered array.
 */
export const filterBy = (
  arr: Grouped[],
  include: FilterBy = 'All'
): Grouped[] => {
  switch (include) {
    case 'Active':
      return arr.filter(({ owner }) => owner.name !== 'Idle');
    case 'Idle':
      return arr.filter(({ owner }) => owner.name === 'Idle');
    case 'Focus':
      return arr.filter(
        ({ group, owner }) =>
          owner.name !== 'Idle' && group.count >= FOCUS_COUNT_THRESHOLD
      );
    case 'All':
    default:
      return arr;
  }
};
