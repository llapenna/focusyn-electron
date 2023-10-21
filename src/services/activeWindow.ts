import type { ActiveWindow } from '@/shared/types/activeWindow';
import checkPreload from '@/reactapp/utils/checkPreload';

/**
 * Listen for active-window messages from the main process
 * @param callback Code to execute on each received IPC message
 */
export const subscribe = (callback: ActiveWindow.Callback) => {
  const api = checkPreload<Window['activeWindow']>('activeWindow');
  api.subscribe(callback);
};
