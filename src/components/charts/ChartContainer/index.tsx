import { hstack, vstack } from '@/reactapp/styled/patterns';

import activeWindow from '@/reactapp/services/activeWindow';
import { Container } from '@/reactapp/components/layout';
import { getFormattedTime } from '@/reactapp/utils/time';
import { Doughnut, Stacked } from '@/reactapp/components/charts';

import { ActiveWindow } from '@/shared/types/activeWindow';

interface Props {
  windows: ActiveWindow.Result[];
}

export const ChartContainer: React.FC<Props> = ({ windows }) => {
  void windows;
  const total = activeWindow.getTotalTime(windows);
  const formattedTotal = getFormattedTime(total, 's');

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
        <Container type="subtle">
          <h2>
            <p>TOTAL</p>
            <p>{formattedTotal}</p>
          </h2>
        </Container>
        <Container type="subtle">
          <h2>
            <p>IDLE</p>
            <p>{formattedTotal}</p>
          </h2>
        </Container>
      </div>
      <div className={vstack()}>
        <Doughnut data={data.doughnut}></Doughnut>
        <Stacked data={data.stacked}></Stacked>
      </div>
    </>
  );
};
