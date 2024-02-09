import { ActiveWindow } from '@/shared/types/activeWindow';
import { UseTooltipParams } from '@visx/tooltip/lib/hooks/useTooltip';

import { TooltipData } from '../Tooltip';

import { chart } from './config';
import { bar } from './styles';

interface Props {
  x: number;
  y?: number;
  zoom: number;
  chartWidth: number;
  window: ActiveWindow.Grouped;
  showTooltip: UseTooltipParams<TooltipData>['showTooltip'];
  hideTooltip: UseTooltipParams<TooltipData>['hideTooltip'];
}

export const Bar = ({
  x,
  y = 0,
  zoom,
  chartWidth,
  window,
  showTooltip,
  hideTooltip,
}: Props) => {
  const className = bar();

  const height = chart.size.h;
  const width =
    chart.step(chartWidth) * Math.floor(window.group.count / 60) * zoom;

  const fill = window.title.toColor();

  // FIXME: the tooltip won't update when the window.group.count changes
  const onMouseEnter = () => {
    showTooltip({
      tooltipData: {
        title: window.owner.name,
        // FIXME: restore time formatting
        description: window.group.count.toString(),
      },
      tooltipTop: y,
      tooltipLeft: x,
    });
  };
  const onMouseLeave = () => hideTooltip();

  // TODO: add motion/animations to the element
  return (
    <rect
      {...{ x, y, className, height, width, fill, onMouseEnter, onMouseLeave }}
    />
  );
};
