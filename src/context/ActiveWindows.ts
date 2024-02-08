import { ActiveWindow } from '@/shared/types/activeWindow';
import { createContext, useContext } from 'react';

const context = createContext<ActiveWindow.Grouped[]>([]);
context.displayName = 'ActiveWindowsContext';

export const ActiveWindowsProvider = context.Provider;

/**
 * Retrieves the list of active windows from the global context
 * @returns List of active windows
 */
export const useActiveWindows = () => {
  return useContext(context);
};
