import { useState } from 'react';
import { Bounds } from '@visx/brush/lib/types';

import { TICKS } from './config';
import { useScale } from './useScale';

const DEFAULT_BOUNDS: [number, number] = [0, TICKS.BARS];
export const useBrushedScale = (width: number) => {
  const [bounds, setBounds] = useState(DEFAULT_BOUNDS);
  const xScale = useScale({ width, x: bounds });

  const onChange = (bounds: Bounds | null) => {
    if (!bounds) return;

    const { x0, x1 } = bounds;
    setBounds([x0, x1]);
  };

  /**
   * Resets the bounds to the default.
   */
  const onClick = () => {
    setBounds(DEFAULT_BOUNDS);
  };

  const brushHandlers = {
    onClick,
    onChange,
  };

  return { brushHandlers, xScale };
};
