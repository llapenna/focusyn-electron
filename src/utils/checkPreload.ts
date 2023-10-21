/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Checks if the given API has been loaded into the `window` object
 * @param api Main process API to check
 * @returns The API if it exists, otherwise throws an error
 */
const checkPreload = <T extends object>(api: string) => {
  if (window && api in window) return (window as any)[api] as T;
  else throw new Error(`Electron API "${api}" not found.`);
};

export default checkPreload;
