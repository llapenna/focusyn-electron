import { ReactNode, useEffect, useState } from 'react';

import { Result } from '@/shared/types/activeWindow';
import { subscribe, unsubscribe } from '@/reactapp/services/activeWindow';
import { context } from './ctx';

interface Props {
  children: ReactNode;
}
export const ActiveWindowsProvider = ({ children }: Props) => {
  const [windows, setWindows] = useState<Result[]>([]);

  useEffect(() => {
    subscribe((_, window) => {
      if (window)
        setWindows((state) => {
          return [...state, window];
        });
      void window;
    });

    return unsubscribe;
  }, []);

  return <context.Provider value={windows}>{children}</context.Provider>;
};
