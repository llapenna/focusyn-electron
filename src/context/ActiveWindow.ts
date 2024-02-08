import { ActiveWindow } from '@/shared/types/activeWindow';
import { createContext, useContext } from 'react';

const context = createContext<ActiveWindow.Grouped[]>([]);
context.displayName = 'ActiveWindowContext';

export const ActiveWindowProvider = context.Provider;

/**
 * Retrieves the list of active windows from the global context
 * @returns List of active windows
 */
export const useActiveWindow = () => {
  return useContext(context);
};
