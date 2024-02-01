import { Brush as VBrush } from '@visx/brush';
import { Bounds, Scale } from '@visx/brush/lib/types';
import { scaleLinear } from '@visx/scale';
import { Dispatch, SetStateAction } from 'react';

import { ChartProps } from '@/reactapp/types/chart';

import { brush } from './config';

interface Props extends ChartProps {
  scale?: Scale;
  width: number;
  setFilterBounds: Dispatch<SetStateAction<[number, number]>>;
}

export const Brush = ({ scale, width, setFilterBounds }: Props) => {
  const yScale = scaleLinear({
    range: [1, 0],
    domain: [0, 1],
  });

  const onChange = (bounds: Bounds | null) => {
    if (!bounds) return;

    const { x0, x1 } = bounds;
    setFilterBounds([x0, x1]);
  };
  return (
    <g transform={`translate(0,${brush.yPos})`}>
      <VBrush
        xScale={scale}
        yScale={yScale}
        width={width}
        height={brush.size.h}
        handleSize={8}
        resizeTriggerAreas={['left', 'right']}
        brushDirection="horizontal"
        onChange={onChange}
      />
    </g>
  );
};
