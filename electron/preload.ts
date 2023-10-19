import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron';

type SubscribeFunction = (event: IpcRendererEvent, ...args: any[]) => void;

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
  subscribe: (callback: SubscribeFunction) =>
    ipcRenderer.on('ACTIVE_WINDOW_SUBSCRIBE', callback),
});
