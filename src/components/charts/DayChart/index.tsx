import { AxisBottom as Axis } from '@visx/axis';
import { GridColumns as Grid } from '@visx/grid';
import { withTooltip } from '@visx/tooltip';
import convert from 'convert';

import { INTERVAL_TIME } from '@/shared/config';
import { CHART_COUNT_THRESHOLD } from '@/reactapp/utils/time';
import { ChartProps } from '@/reactapp/types/chart';
import { token as getToken } from '@/reactapp/styled/tokens';
import { useContainerWidth } from '@/reactapp/hooks';

import {
  SVG,
  CHART,
  MARGIN_X,
  TICKS,
  BRUSH,
  BORDER_RADIUS,
  AXIS,
} from './config';
import { minutesSinceStart, shouldRenderData } from './utils';
import { Background } from '../Background';

import { Tooltip, TooltipData } from '../Tooltip';

import { useScale } from './useScale';
import { Bars } from './Bars';
import { Brush } from './Brush';
import { useBrushedScale } from './useBrushedScale';

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
    const { ref, width } = useContainerWidth();
    const { brushHandlers, xScale } = useBrushedScale(width);
    const brushScale = useScale({ width });

    // Remove data that doesn't get to a minute and the data out of bounds
    const filteredData = data.filter(
      shouldRenderData(xScale.domain() as [number, number])
    );

    console.log(
      xScale.domain(),
      xScale.domain().reduce((acc, cur, i) => acc + (i === 0 ? -cur : cur)),
      0
    );

    return (
      <div className="container" ref={ref}>
        <svg width={SVG.SIZE.W} height={SVG.SIZE.H}>
            <Background
            width={SVG.SIZE.W}
            height={CHART.SIZE.H}
            color={CHART.BG}
            borderRadius={CHART.BR}
          />
          <Bars
              scale={xScale}
            data={filteredData}
            containerWidth={width}
            tooltip={{ show: showTooltip, hide: hideTooltip }}
            />
            <Grid
              scale={xScale}
            height={CHART.SIZE.H}
            left={MARGIN_X}
            tickValues={TICKS.VALUES}
            stroke={getToken('colors.slate.600')}
            />
          <g transform={`translate(0, ${BRUSH.TOP_POSITION})`}>
            <Background
              width={SVG.SIZE.W}
              height={BRUSH.SIZE.H}
              color={CHART.BG}
              borderRadius={BORDER_RADIUS}
            />
            <Bars
              data={data}
              containerWidth={width}
              height={BRUSH.SIZE.H}
              scale={brushScale}
            >
              <Brush
                containerWidth={width}
                {...brushHandlers}
                scale={brushScale}
              />
            </Bars>
          </g>
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
