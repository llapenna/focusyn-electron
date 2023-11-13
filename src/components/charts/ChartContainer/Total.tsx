import { Container } from '@/reactapp/components/layout';
import type { TimeUnits } from '@/reactapp/types/time';

import { total } from './styles';

interface UnitProps {
  value: number;
  unit: string;
}

const Unit: React.FC<UnitProps> = ({ value, unit }) => {
  const classes = total();
  return (
    <>
      <span className={classes.value}>{value}</span>
      <span className={classes.timeUnit}>{unit}</span>
    </>
  );
};

interface Props {
  title: string;
  value: TimeUnits;
}
export const Total: React.FC<Props> = ({ title, value }) => {
  const classes = total();

  return (
    <Container type="subtle">
      <div>
        <p className={classes.title}>{title}</p>
        <p>
          <Unit value={value.h} unit="H" />
          <Unit value={value.m} unit="M" />
          <Unit value={value.s} unit="S" />
        </p>
      </div>
    </Container>
  );
};
