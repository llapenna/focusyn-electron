import { contextBridge } from 'electron';

/**
 * Expose protected methods that allow the renderer process to use
 */
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});
