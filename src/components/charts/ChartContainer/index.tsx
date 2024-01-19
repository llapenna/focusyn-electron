import { hstack, vstack } from '@/reactapp/styled/patterns';

import activeWindow from '@/reactapp/services/activeWindow';
import { Doughnut, Stacked } from '@/reactapp/components/charts';

import { ActiveWindow } from '@/shared/types/activeWindow';

import { Total } from './Total';

interface Props {
  windows: ActiveWindow.Result[];
}

export const ChartContainer: React.FC<Props> = ({ windows }) => {
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
        <Total title="ACTIVE" type="active" values={windows}></Total>
        <Total title="IDLE" type="idle" values={windows}></Total>
      </div>
      <div className={vstack()}>
        <Stacked data={data.stacked}></Stacked>
        <Doughnut data={data.doughnut}></Doughnut>
      </div>
    </>
  );
};
