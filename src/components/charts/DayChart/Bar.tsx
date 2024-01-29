import { ActiveWindow } from '@/shared/types/activeWindow';
import { UseTooltipParams } from '@visx/tooltip/lib/hooks/useTooltip';

import { TooltipData } from '../Tooltip';

import { chart, container } from './config';
import { bar } from './styles';

interface Props {
  x: number;
  y?: number;
  chartWidth: number;
  window: ActiveWindow.Grouped;
  showTooltip: UseTooltipParams<TooltipData>['showTooltip'];
  hideTooltip: UseTooltipParams<TooltipData>['hideTooltip'];
}

export const Bar = ({
  x,
  y = container.size.margin,
  chartWidth,
  window,
  showTooltip,
  hideTooltip,
}: Props) => {
  const className = bar();

  const height = chart.size.h;
  const width = chart.step(chartWidth) * Math.floor(window.group.count / 60);

  const fill = window.title.toColor();

  const onMouseEnter = () => {
    showTooltip({
      tooltipData: {
        title: window.owner.name,
        description: window.group.count.toString(),
      },
      tooltipTop: y,
      tooltipLeft: x,
    });
  };
  const onMouseLeave = () => hideTooltip();

  return (
    <rect
      {...{ x, y, className, height, width, fill, onMouseEnter, onMouseLeave }}
    />
  );
};
