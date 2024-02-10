import { Result, Grouped } from '@/shared/types/activeWindow';
import { createContext, useContext } from 'react';

import { groupBy } from '@/reactapp/services/activeWindow';
import { GroupByArgs } from '@/reactapp/services/activeWindow/types';

const context = createContext<Result[]>([]);
context.displayName = 'ActiveWindowsContext';

export const ActiveWindowsProvider = context.Provider;

/**
 * Retrieves the list of active windows from the global context.
 * @returns List of active windows.
 */
export const useActiveWindows = (): Result[] => {
  return useContext(context);
};

/**
 * Retrieves the list of active windows from the global context and groups.
 * @returns Grouped active windows by `owner.name` and grouping if they are consecutive.
 */
export const useGroupedActiveWindows = ({
  by = 'owner.name',
  consecutive = true,
}: Partial<GroupByArgs>): Grouped[] => {
  const data = useContext(context);

  return groupBy(data, { by, consecutive });
};
