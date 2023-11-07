import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Doughnut as DoughnutChart } from 'react-chartjs-2';

import { getFormattedTime } from '@/reactapp/utils/time';
import { segToMs } from '@/shared/time';
import type { ChartProps } from '@/reactapp/types/chart';

import dataToDataset from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Doughnut = ({ data }: ChartProps) => {
  const formattedData = dataToDataset.doughnut(data);
  const options: ChartOptions<'doughnut'> = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label(this, item) {
            const value = item.raw as number;
            const ms = segToMs(value);

            return 'Time: ' + getFormattedTime(ms);
          },
        },
      },
    },
  };
  return (
    <div>
      <DoughnutChart options={options} data={formattedData}></DoughnutChart>
    </div>
  );
};
