import { Container } from '@/reactapp/components/layout';

import { ActiveWindow } from '@/shared/types/activeWindow';
import activeWindow from '@/reactapp/services/activeWindow';
import { getTimeUnits } from '@/reactapp/utils/time';

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
  values: ActiveWindow.Result[];
  type: 'idle' | 'active' | 'both';
}
export const Total: React.FC<Props> = ({ title, values, type }) => {
  const classes = total();

  const totalValue = activeWindow.getTotalTime(values, type);
  const value = getTimeUnits(totalValue, 's');

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
