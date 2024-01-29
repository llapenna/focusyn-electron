import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisBottom as Axis } from '@visx/axis';
import { GridColumns as Grid } from '@visx/grid';
import { withTooltip } from '@visx/tooltip';

import { INTERVAL_TIME } from '@/shared/config';
import { msToSec } from '@/shared/time';
import { ChartProps } from '@/reactapp/types/chart';

import { container, chart } from './config';
import { minutesSinceStart } from './utils';
import { Background } from '../Background';
import { useSVGWidth } from './useSVGWidth';
import { Tooltip, TooltipData } from '../Tooltip';
import { Bar } from './Bar';

export const DayChart = withTooltip<ChartProps, TooltipData>(
  ({
    data,
    tooltipOpen,
    tooltipData,
    hideTooltip,
    showTooltip,
    tooltipTop,
    tooltipLeft,
  }) => {
    const { ref, width } = useSVGWidth();

    const xScale = scaleLinear<number>({
      domain: [0, chart.maxBarQty],
      range: [0, chart.size.w(width)],
      clamp: true,
    });

    // Remove data that doesn't get to a minute
    const filteredData = data.filter((d) => {
      const threshold = 60 / msToSec(INTERVAL_TIME);

      return d.group.count >= threshold;
    });

    return (
      <div>
        <svg
          width={container.size.w}
          height={container.size.h}
          ref={ref}
          style={{ border: '1px solid black' }}
        >
          <Background
            width={container.size.w}
            height={chart.size.h}
            top={container.size.margin}
            color="#D0D0D0"
          />
          <Group left={container.size.margin}>
            {filteredData.map((d) => {
              const t = minutesSinceStart(d.timestamp);
              const x = xScale(t);

              const key = `bar-${d.owner.name}-${d.timestamp}`;
              return (
                <Bar
                  {...{
                    x,
                    chartWidth: width,
                    key,
                    window: d,
                    showTooltip,
                    hideTooltip,
                  }}
                />
              );
            })}
          </Group>
          <Axis
            left={container.size.margin}
            top={container.size.margin + chart.size.h}
            scale={xScale}
            hideAxisLine={true}
            hideTicks={true}
            tickValues={chart.tickValues}
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
            height={chart.size.h}
            left={container.size.margin}
            top={container.size.margin}
            tickValues={chart.tickValues}
          />
        </svg>
        <Tooltip
          isOpen={tooltipOpen}
          data={tooltipData}
          top={tooltipTop}
          left={tooltipLeft}
        />
      </div>
    );
  }
);
