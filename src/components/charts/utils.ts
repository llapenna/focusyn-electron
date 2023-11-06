import { iteratee } from 'lodash-es';

import { INTERVAL_TIME } from '@/shared/config';
import { msToSeg } from '@/shared/time';
import { ActiveWindow } from '@/shared/types/activeWindow';

const doughnutDataset = (windowData: ActiveWindow.Grouped[]) => {
  const entries = windowData.map(({ owner }) => owner.name);
  const data = windowData.map(
    ({ group }) => group.count * msToSeg(INTERVAL_TIME)
  );

  const datasets = [
    {
      label: 'Time (seconds)',
      data,
      backgroundColor: entries.map((title) => title.toColor()),
    },
  ];
  return { labels: entries, datasets };
};

const barsDataset = (windowData: ActiveWindow.Grouped[]) => {
  const labels = ['Time'];
  const datasets = windowData.map(({ owner, group, timestamp }) => ({
    label: `${owner.name}-${timestamp}`,
    data: [group.count * msToSeg(INTERVAL_TIME)],
    backgroundColor: owner.name.toColor(),
  }));

  return { labels, datasets };
};

const test = (windowData: ActiveWindow.Grouped[]) => {
  void windowData;
  const datasets = windowData.map((window) => {
    const { group, timestamp } = window;
    const groupValue = iteratee(group.by)(window) as string;

    return {
      label: `${groupValue}-${timestamp}`,
      data: [
        {
          x: group.count * msToSeg(INTERVAL_TIME),
          y: group.count * msToSeg(INTERVAL_TIME),
        },
      ],
      backgroundColor: groupValue.toColor(),
    };
  });

  return { datasets };
};

const dataToDataset = {
  doughnut: doughnutDataset,
  bars: barsDataset,
  test,
};

export default dataToDataset;
