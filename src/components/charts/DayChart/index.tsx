import { FC } from 'react';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisBottom as Axis } from '@visx/axis';
import { GridColumns as Grid } from '@visx/grid';

import { INTERVAL_TIME } from '@/shared/config';
import { msToSec } from '@/shared/time';
import { ChartProps } from '@/reactapp/types/chart';

import { sizes, chart, margins } from './config';
import { timestampToMinutes } from './utils';
import { Background } from '../Background';
import { useSVGWidth } from './useSVGWidth';
import { Border } from '../Border';

export const DayChart: FC<ChartProps> = ({ data }) => {
  const { ref, width } = useSVGWidth();

  const xScale = scaleLinear<number>({
    domain: [0, chart.ticks],
    range: [0, chart.bounds.x(width)],
    clamp: true,
  });

  // Remove data that doesn't get to a minute
  const filteredData = data.filter((d) => {
    const threshold = 60 / msToSec(INTERVAL_TIME);

    return d.group.count >= threshold;
  });

  return (
    <div>
      <svg width={sizes.w} height={sizes.h} ref={ref}>
        <Background width={sizes.w} height={sizes.h - sizes.axisH} />
        <Border width={sizes.w} height={sizes.h} />
        <Group left={margins}>
          {filteredData.map((d) => {
            const t = timestampToMinutes(d.timestamp);

            const x = xScale(t);
            const y = 0;
            const height = sizes.h - sizes.axisH;
            const barWidth = chart.step(width) * Math.floor(d.group.count / 60);
            const fill = d.title.toColor();

            const key = `bar-${d.owner.name}-${d.timestamp}`;

            return <rect {...{ x, y, height, width: barWidth, fill, key }} />;
          })}
        </Group>
        <Axis
          left={margins}
          top={sizes.h - sizes.axisH}
          scale={xScale}
          tickValues={chart.tickValues()}
          tickFormat={(v, i, a) => {
            const isLast = i === a.length - 1;
            if (isLast) return '24hs';

            const msInMin = 60 * 1000;
            // Each v represents the quantity of minutes since 00:00
            const d = new Date((v as number) * msInMin);
            const date = new Date(d.getTime() + 3 * 60 * msInMin);

            return `${date.getHours()}hs`;
          }}
        />
        <Grid
          scale={xScale}
          height={chart.bounds.y}
          left={margins}
          tickValues={chart.tickValues()}
        />
      </svg>
    </div>
  );
};
