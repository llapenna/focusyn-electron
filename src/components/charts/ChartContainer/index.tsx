import { hstack, vstack } from '@/reactapp/styled/patterns';

import activeWindow from '@/reactapp/services/activeWindow';
import { getTimeUnits } from '@/reactapp/utils/time';
import { Doughnut, Stacked } from '@/reactapp/components/charts';

import { ActiveWindow } from '@/shared/types/activeWindow';

import { Total } from './Total';

interface Props {
  windows: ActiveWindow.Result[];
}

export const ChartContainer: React.FC<Props> = ({ windows }) => {
  void windows;
  const total = activeWindow.getTotalTime(windows);
  const formattedTotal = getTimeUnits(total, 's');

  const data = {
    doughnut: activeWindow.groupBy(windows, { by: 'owner.name' }),
    stacked: activeWindow.groupBy(windows, {
      by: 'owner.name',
      consecutive: true,
    }),
  };

  return (
    <>
      <div className={hstack({ justify: 'space-evenly' })}>
        <Total title="TOTAL" value={formattedTotal}></Total>
        <Total title="IDLE" value={formattedTotal}></Total>
      </div>
      <div className={vstack()}>
        <Doughnut data={data.doughnut}></Doughnut>
        <Stacked data={data.stacked}></Stacked>
      </div>
    </>
  );
};
