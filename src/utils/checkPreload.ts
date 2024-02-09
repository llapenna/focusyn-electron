/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ElectronAPI } from '@/reactapp/types/window';

type APIList = keyof ElectronAPI;

/**
 * Checks if the given API has been loaded into the `window.electronAPI` object and returns it so it can be used directly.
 * @param api Name of the Electron API to check.
 * @returns The Electron API if it exists. Otherwise, throws an error.
 */
const checkPreload = <T extends ElectronAPI[APIList]>(api: APIList) => {
  if (window && api in window['electronAPI'])
    return window['electronAPI'][api] as T;
  else throw new Error(`Electron API "${api}" not found.`);
};

export default checkPreload;
