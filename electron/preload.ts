import { contextBridge, ipcRenderer } from 'electron';

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
  current: () => ipcRenderer.invoke('GET_CURRENT_WINDOW'),
  all: () => ipcRenderer.invoke('GET_ALL_WINDOWS'),
});
