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

import { dataToDataset } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: Record<string, number>;
}

export const Doughnut = ({ data }: Props) => {
  const formattedData = dataToDataset(data, 'doughnut');
  const options: ChartOptions = {
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
  return <DoughnutChart options={options} data={formattedData}></DoughnutChart>;
};
