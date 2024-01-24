import { FC } from 'react';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisBottom as Axis } from '@visx/axis';

import { ChartProps } from '@/reactapp/types/chart';

import { sizes, chart, margins } from './config';
import { Background } from '../Background';
import { useSVGWidth } from './useSVGWidth';

export const DayChart: FC<ChartProps> = ({ data }) => {
  const { ref, width } = useSVGWidth();

  const xScale = scaleLinear({
    domain: [0, chart.ticks],
    range: [0, chart.bounds.x(width)],
  });

  // X Axis scale
  const tScale = scaleLinear({
    domain: [0, 24 * 60 * 60 * 1000],
    range: [0, chart.bounds.x(width)],
  });
  tScale.nice().ticks(6);

  return (
    <div>
      <svg width={sizes.w} height={sizes.h} ref={ref}>
        <Background width={sizes.w} height={sizes.h - sizes.axisH} />
        <Group left={margins} top={margins}></Group>
        <Axis left={margins} top={sizes.h - sizes.axisH} scale={xScale} />
      </svg>
    </div>
  );
};
