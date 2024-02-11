import { Alarm, Moon, Target } from '@phosphor-icons/react';

import { hstack } from '@/reactapp/styled/patterns';
import {
  useActiveWindows,
  useGroupedActiveWindows,
} from '@/reactapp/context/ActiveWindows';

import { overview } from './styles';
import { Total } from './Total';
import { Chart } from './Chart';
import { getTotalTime } from '@/reactapp/services/activeWindow';
import { FOCUS_COUNT_THRESHOLD, getFormattedTime } from '@/reactapp/utils/time';

const Overview = () => {
  const windows = useActiveWindows();
  const grouped = useGroupedActiveWindows({});

  const total = getTotalTime(grouped, 'All');
  const idle = getTotalTime(grouped, 'Idle');
  const focused = getTotalTime(grouped, 'Focus');

  return (
    <div className={overview()}>
      <div className={hstack({ gap: 'xl' })}>
        <Total
          title="Total"
          value={getFormattedTime(total)}
          icon={<Alarm size={24} />}
        />
        <Total
          title="Focus"
          value={getFormattedTime(focused)}
          icon={<Target size={24} />}
        />
        <Total
          title="Idle"
          value={getFormattedTime(idle)}
          icon={<Moon size={24} />}
        />
      </div>
      <Chart />
    </div>
  );
};

export default Overview;
