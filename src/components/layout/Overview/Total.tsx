import { ReactNode } from 'react';

import { total } from './styles';
import { vstack } from '@/reactapp/styled/patterns';
import Container from '../Container';

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
}

export const Total = ({ icon, title, value }: Props) => {
  const classes = total();
  return (
    <div className={classes.width}>
      <Container>
        <div className={vstack({ gap: 'md', alignItems: 'start' })}>
          {icon}
          <div className={vstack({ gap: 'xxs', alignItems: 'start' })}>
            <p className={classes.title}>{title}</p>
            <p className={classes.value}>{value}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
