import { iteratee } from 'lodash-es';
import type { ChartData } from 'chart.js';

import { INTERVAL_TIME } from '@/shared/config';
import { msToSeg } from '@/shared/time';
import type { ActiveWindow } from '@/shared/types/activeWindow';

const doughnutDataset = (
  windowData: ActiveWindow.Grouped[]
): ChartData<'doughnut'> => {
  const entries = windowData.map(({ owner }) => owner.name);
  const data = windowData.map(
    ({ group }) => group.count * msToSeg(INTERVAL_TIME)
  );

  const datasets: ChartData<'doughnut'>['datasets'] = [
    {
      label: 'Time (seconds)',
      data,
      backgroundColor: entries.map((title) => title.toColor()),
    },
  ];
  return { labels: entries, datasets };
};

const barsDataset = (windowData: ActiveWindow.Grouped[]): ChartData<'bar'> => {
  const labels = ['Time'];
  const datasets: ChartData<'bar'>['datasets'] = windowData.map(
    ({ owner, group, timestamp }) => ({
      label: `${owner.name}-${timestamp}`,
      data: [group.count * msToSeg(INTERVAL_TIME)],
      backgroundColor: owner.name.toColor(),
      barThickness: 150,
    })
  );

  return { labels, datasets };
};

const dataToDataset = {
  doughnut: doughnutDataset,
  bars: barsDataset,
};

export default dataToDataset;
