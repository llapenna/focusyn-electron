import { Alarm, Moon, Target } from '@phosphor-icons/react';

import { hstack } from '@/reactapp/styled/patterns';
import { useActiveWindows } from '@/reactapp/context/ActiveWindows';

import { overview } from './styles';
import { Total } from './Total';
import { Chart } from './Chart';
import { getTotalTime } from '@/reactapp/services/activeWindow/getTotalTime';
import { getFormattedTime } from '@/reactapp/utils/time';

const Overview = () => {
  const windows = useActiveWindows();

  const total = getTotalTime(windows, 'both');
  const idle = getTotalTime(windows, 'idle');

  return (
    <div className={overview()}>
      <div className={hstack({ gap: 'xl' })}>
        <Total
          title="Total"
          value={getFormattedTime(total)}
          icon={<Alarm size={24} />}
        ></Total>
        {/* TODO: find a way to calculate focus time */}
        {/* <Total title="Focus" value="2h 30" icon={<Target size={24} />}></Total> */}
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
