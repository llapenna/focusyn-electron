import { Alarm, Moon, Target } from '@phosphor-icons/react';

import { hstack, vstack } from '@/reactapp/styled/patterns';

import { overview } from './styles';
import { Total } from './Total';
import { Container } from '@/reactapp/components/layout';

const Overview = () => {
  return (
    <div className={overview()}>
      <div className={hstack({ gap: 'xl' })}>
        {/* TODO: set correct times */}
        <Total title="Total" value="12h 15m" icon={<Alarm size={24} />}></Total>
        <Total title="Focus" value="2h 30" icon={<Target size={24} />}></Total>
        <Total title="Idle" value="30m" icon={<Moon size={24} />}></Total>
      </div>
      <Container>
        <div className={vstack({ gap: 'xl' })}></div>
      </Container>
    </div>
  );
};

export default Overview;
