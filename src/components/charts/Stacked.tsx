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
import { msToSeg, segToMs } from '@/shared/time';

import dataToDataset from './utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Stacked = ({ data }: ChartProps) => {
  const formattedData = dataToDataset.bars(data);

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        beginAtZero: true,
        stacked: true,
        grace: 0,
        ticks: {
          stepSize: msToSeg(INTERVAL_TIME),
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        grace: 0,
        ticks: {
          stepSize: msToSeg(INTERVAL_TIME),
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
            const ms = segToMs(ctx.raw as number);

            const label = rawLabel.split('-')[0] ?? 'unknown';
            const formattedTime = getFormattedTime(ms);

            return `${label}: ${formattedTime}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <BarChart options={options} data={formattedData}></BarChart>
    </div>
  );
};
