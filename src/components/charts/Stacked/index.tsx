import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartOptions,
} from 'chart.js';
import { Bar as BarChart } from 'react-chartjs-2';

import { getFormattedTime } from '@/reactapp/utils/time';
import type { ChartProps } from '@/reactapp/types/chart';
import { INTERVAL_TIME } from '@/shared/config';
import { hourToSec, msToSec, secToMs } from '@/shared/time';

import dataToDataset from '../utils';
import { stacked } from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props extends ChartProps {
  max?: 'full' | 'minimum';
}

export const Stacked = ({ data, max = 'full' }: Props) => {
  const formattedData = dataToDataset.bars(data);

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        stacked: true,
        ticks: {
          stepSize: msToSec(INTERVAL_TIME),
        },
        suggestedMax: max === 'full' ? undefined : hourToSec(24),
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: msToSec(INTERVAL_TIME),
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(ctx) {
            const rawLabel = ctx.dataset.label ?? '';
            const ms = secToMs(ctx.raw as number);

            const label = rawLabel.split('-')[0] ?? 'unknown';
            const formattedTime = getFormattedTime(ms);

            return `${label}: ${formattedTime}`;
          },
        },
      },
    },
  };

  return (
    <div className={stacked()}>
      <BarChart options={options} data={formattedData}></BarChart>
    </div>
  );
};
