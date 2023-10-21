import { contextBridge, ipcRenderer } from 'electron';
import type { SubscribeCallback } from '@/shared/types';
/**
 * Expose protected methods that allow the renderer process to use node modules and methods
 */
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

/**
 * Expose active window related methods
 */
contextBridge.exposeInMainWorld('activeWindow', {
  current: () => ipcRenderer.invoke('ACTIVE_WINDOW_CURRENT'),
  subscribe: (callback: SubscribeCallback) =>
    ipcRenderer.on('ACTIVE_WINDOW_SUBSCRIBE', callback),
});
