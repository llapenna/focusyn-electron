import type { Callback } from '@/shared/types/activeWindow';
import checkPreload from '@/reactapp/utils/checkPreload';

import { groupBy } from './groupBy';
import { ElectronAPI } from '@/reactapp/types/window';

const api = () => checkPreload<ElectronAPI['activeWindow']>('activeWindow');

/**
 * Listen for active-window messages from the main process
 * @param callback Code to execute on each received IPC message
 */
export const subscribe = (callback: Callback) => {
  api().subscribe(callback);
};
/**
 * Stop listening for active-window messages from the main process
 */
export const unsubscribe = api().unsubscribe;

export { groupBy };
