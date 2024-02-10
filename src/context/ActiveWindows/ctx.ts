import { createContext } from 'react';

import { Result } from '@/shared/types/activeWindow';

export const context = createContext<Result[]>([]);
context.displayName = 'ActiveWindowsContext';
