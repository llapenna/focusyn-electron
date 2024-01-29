import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisBottom as Axis } from '@visx/axis';
import { GridColumns as Grid } from '@visx/grid';
import { withTooltip } from '@visx/tooltip';

import { INTERVAL_TIME } from '@/shared/config';
import { msToSec } from '@/shared/time';
import { ChartProps } from '@/reactapp/types/chart';

import { container, chart } from './config';
import { timestampToMinutes } from './utils';
import { Background } from '../Background';
import { useSVGWidth } from './useSVGWidth';
import { Border } from '../Border';
import { Tooltip, TooltipData } from '../Tooltip';
import { bar } from './styles';

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
        <svg
          width={container.size.w}
          height={container.size.h}
          ref={ref}
          style={{ border: '1px solid black' }}
        >
          <Background
            width={container.size.w}
            height={container.size.h - container.size.margin * 2}
            top={container.size.margin}
            color="#D0D0D0"
          />
          <rect
            className={bar()}
            x={100}
            y={container.size.margin}
            height={container.size.h - container.size.margin * 2}
            width={100}
          ></rect>
          {/* <Border width={sizes.w} height={sizes.h} /> */}
          <Group left={container.size.margin}>
            {/* {filteredData.map((d) => {
              const t = timestampToMinutes(d.timestamp);

              const x = xScale(t);
              const y = 0;
              const height = sizes.h - sizes.axisH;
              const barWidth =
                chart.step(width) * Math.floor(d.group.count / 60);
              const fill = d.title.toColor();

              const key = `bar-${d.owner.name}-${d.timestamp}`;

              return (
                <rect
                  {...{ x, y, height, width: barWidth, fill, key }}
                  onMouseMove={() => {
                    showTooltip({
                      tooltipData: {
                        title: d.owner.name,
                        description: new Date(d.timestamp).toTimeString(),
                      },
                      tooltipTop: y,
                      tooltipLeft: x,
                    });
                  }}
                  onMouseLeave={() => {
                    hideTooltip();
                  }}
                />
              );
            })} */}
          </Group>
          <Axis
            left={container.size.margin}
            top={container.size.h - container.size.margin}
            scale={xScale}
            hideAxisLine={true}
            tickValues={chart.tickValues}
            // tickFormat={(v, i, a) => {
            //   const isLast = i === a.length - 1;
            //   if (isLast) return '24hs';

            //   const msInMin = 60 * 1000;
            //   // Each v represents the quantity of minutes since 00:00
            //   const d = new Date((v as number) * msInMin);
            //   const date = new Date(d.getTime() + 3 * 60 * msInMin);

            //   return `${date.getHours()}hs`;
            // }}
          />
          <Grid
            scale={xScale}
            height={chart.bounds.y}
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
        <table>
          <thead>
            <tr>
              <td style={{ width: 200 }}>Titulo</td>
              <td style={{ width: 200 }}>Cant. (c/u = 5s)</td>
              <td style={{ width: 200 }}>Timestamp</td>
              <td style={{ width: 200 }}>x</td>
              <td style={{ width: 200 }}>width</td>
            </tr>
          </thead>
          <tbody>
            {data.map(({ group, timestamp, owner }) => {
              const date = new Date(timestamp);
              const t = timestampToMinutes(timestamp);

              const x = xScale(t);
              const barWidth = chart.step(width) * Math.floor(group.count / 60);

              const threshold = 60 / msToSec(INTERVAL_TIME);

              return (
                <tr
                  key={`${owner.name}-${timestamp}`}
                  style={{
                    color: group.count < threshold ? 'lightgray' : 'black',
                  }}
                >
                  <td>{owner.name}</td>
                  <td>{group.count}</td>
                  <td>
                    {date.getHours()}:{date.getMinutes()}
                  </td>
                  <td>{x}</td>
                  <td>{barWidth}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
);