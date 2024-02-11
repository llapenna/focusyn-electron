import { ReactNode } from 'react';
import { Group } from '@visx/group';
import { UseTooltipParams } from '@visx/tooltip/lib/hooks/useTooltip';

import { Grouped } from '@/shared/types/activeWindow';
import { CHART_COUNT_THRESHOLD } from '@/reactapp/utils/time';

import { TooltipData } from '../Tooltip';
import { minutesSinceStart } from './utils';
import { useScale } from './useScale';
import { CHART, MARGIN_X, TICKS } from './config';

interface Props {
  data: Grouped[];
  tooltip?: {
    show: UseTooltipParams<TooltipData>['showTooltip'];
    hide: UseTooltipParams<TooltipData>['hideTooltip'];
  };
  containerWidth: number;
  children?: ReactNode;
  top?: number;
  height?: number;
}
export const Bars = ({
  data,
  containerWidth,
  tooltip,
  children,
  top = 0,
  height = CHART.SIZE.H,
}: Props) => {
  const xScale = useScale({ width: containerWidth });

  const onMouseEnter = (w: Grouped, x: number) => () =>
    tooltip?.show({
      tooltipData: {
        title: w.owner.name,
        // FIXME: restore time formatting
        description: w.group.count.toString(),
      },
      tooltipTop: 0,
      tooltipLeft: x,
    });
  const onMouseLeave = tooltip?.hide;

  return (
    <Group left={MARGIN_X} top={top}>
      {data.map((w) => {
        const t = minutesSinceStart(w.timestamp);
        const x = xScale(t);
        const y = 0;

        const width =
          TICKS.STEP(containerWidth) *
          Math.floor(w.group.count / CHART_COUNT_THRESHOLD);
        const key = `bar-${w.owner.name}-${w.timestamp}`;

        const fill = w.title.toColor();

        return (
          <rect
            {...{
              key,
              x,
              y,
              height,
              width,
              fill,
              onMouseEnter: onMouseEnter(w, x),
              onMouseLeave,
            }}
          />
        );
      })}
      {children}
    </Group>
  );
};
