import { useContext } from 'react';

import { GroupByArgs } from '@/reactapp/services/activeWindow/types';
import { groupBy } from '@/reactapp/services/activeWindow';
import { Grouped, Result } from '@/shared/types/activeWindow';

import { context } from './ctx';

/**
 * Retrieves the list of active windows from the global context.
 * @returns List of active windows.
 */
export const useActiveWindows = (): Result[] => {
  return useContext(context);
};

/**
 * Retrieves the list of active windows from the global context and groups the results.
 * @returns Grouped active windows by `owner.name` and grouping if they are consecutive.
 */
// FIXME: Set the props so they're optional and you're not forced to pass {}
export const useGroupedActiveWindows = ({
  by = 'owner.name',
  consecutive = true,
}: Partial<GroupByArgs>): Grouped[] => {
  const data = useContext(context);

  return groupBy(data, { by, consecutive });
};
