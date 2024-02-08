import type { ActiveWindow } from '@/shared/types/activeWindow';

export interface ElectronAPI {
  activeWindow: {
    subscribe: ActiveWindow.Subscribe;
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
