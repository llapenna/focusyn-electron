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

  const total = getTotalTime(windows, 'both');
  const idle = getTotalTime(windows, 'idle');

  const focusedEntries = grouped.filter(
    ({ group }) => group.count >= FOCUS_COUNT_THRESHOLD
  );
  const focused = getTotalTime(focusedEntries, 'active');

  return (
    <div className={overview()}>
      <div className={hstack({ gap: 'xl' })}>
        <Total
          title="Total"
          value={getFormattedTime(total)}
          icon={<Alarm size={24} />}
        ></Total>
        {/* TODO: find a way to calculate focus time */}
        <Total
          title="Focus"
          value={getFormattedTime(focused)}
          icon={<Target size={24} />}
        ></Total>
        <Total
          title="Idle"
          value={getFormattedTime(idle)}
          icon={<Moon size={24} />}
        ></Total>
      </div>
      <Chart />
    </div>
  );
};

export default Overview;
