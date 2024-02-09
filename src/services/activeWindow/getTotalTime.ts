import { INTERVAL_TIME } from '@/shared/config';
import { ActiveWindow } from '@/shared/types/activeWindow';

/**
 * Calculates the total time of all active windows.
 * @param arr Array containing the list of active windows
 * @param include If 'active', only active windows will be included. If 'idle', only idle windows will be included. If 'both', both active and idle windows will be included.
 * @returns Total time number in milliseconds
 */
export const getTotalTime = (
  arr: ActiveWindow.Result[],
  include: 'active' | 'idle' | 'both' = 'active'
): number => {
  let resultingArray: ActiveWindow.Result[] = [];

  if (include === 'both') resultingArray = arr;
  // Include idle or active windows
  else
    resultingArray = arr.filter(({ owner }) =>
      include === 'idle' ? owner.name === 'Idle' : owner.name !== 'Idle'
    );

  return resultingArray.length * INTERVAL_TIME;
};
