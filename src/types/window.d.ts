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
}
