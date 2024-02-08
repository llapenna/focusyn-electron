import { contextBridge, ipcRenderer } from 'electron';

import type { IPC } from '@/shared/types/utils';
/**
 * Expose protected methods that allow the renderer process to use node modules and methods
 */
const versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
};

/**
 * Expose active window related methods
 */
const activeWindow = {
  current: () => ipcRenderer.invoke('ACTIVE_WINDOW_CURRENT'),
  subscribe: (callback: IPC.SubscribeCallback) =>
    ipcRenderer.on('ACTIVE_WINDOW_SUBSCRIBE', callback),
};

contextBridge.exposeInMainWorld('electronAPI', {
  versions,
  activeWindow,
});
