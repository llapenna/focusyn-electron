/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ElectronAPI } from '@/reactapp/types/window';

type ApiHandler<T extends object> = (api: T) => any;
type APIList = keyof ElectronAPI;

/**
 * Checks if the given API has been loaded into the `window.electronAPI` object
 * @param api Electron process API to check.
 * @param fn Function to execute if the API exists. Receives the API as an argument.
 * @returns If the API exists, the result of the function passed to `fn`. Otherwise, throws an error.
 */
const checkPreload = <T extends ElectronAPI[APIList]>(
  api: APIList,
  fn: ApiHandler<T>
) => {
  if (window && api in window['electronAPI'])
    return fn(window['electronAPI'][api] as T);
  else throw new Error(`Electron API "${api}" not found.`);
};

export default checkPreload;
