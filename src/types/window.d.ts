import type { ActiveWindow } from '@/shared/activeWindow';

declare global {
  interface Window {
    activeWindow: {
      subscribe: ActiveWindow.Subscribe;
    };
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
