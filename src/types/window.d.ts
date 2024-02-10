import type { Subscribe } from '@/shared/types/activeWindow';

export interface ElectronAPI {
  activeWindow: {
    subscribe: Subscribe;
    unsubscribe: Unsubscribe;
  };
  versions: {
    node: () => string;
    chrome: () => string;
    electron: () => string;
  };
}
declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }

  interface String {
    /**
     * Converts a string to a color.
     */
    toColor: () => string;
  }

  /**
   * Clamps a number between a minimum and maximum value.
   */
  interface Number {
    clamp: (min: number, max: number) => number;
  }
}
