import { useState } from 'react';

import { hstack, vstack } from '@/reactapp/styled/patterns';
import { Container } from '@/reactapp/components/layout';
import { DayChart } from '@/reactapp/components/charts/DayChart';
import { filterBy } from '@/reactapp/services/activeWindow';
import { FilterBy } from '@/reactapp/services/activeWindow/types';
import { Grouped } from '@/shared/types/activeWindow';

import { filter } from './styles';

interface ButtonProps {
  children: string;
  active: boolean;
  onClick?: () => void;
}
const Button = ({ children, active, onClick }: ButtonProps) => {
  return (
    <button className={filter({ active })} onClick={onClick}>
      {children}
    </button>
  );
};

interface Props {
  data: Grouped[];
}

export const Chart = ({ data }: Props) => {
  const [filter, setFilter] = useState<FilterBy>('All');

  const filters = ['All', 'Active', 'Focus', 'Idle'] as FilterBy[];

  const windows = filterBy(data, filter);

  const isActive = (value: FilterBy) => value === filter;
  const filterChange = (filter: FilterBy) => () => setFilter(filter);
  return (
    <Container>
      <div className={vstack({ gap: 'xl', alignItems: 'stretch' })}>
        <div className={hstack({ gap: 'sm' })}>
          {filters.map((f) => (
            <Button onClick={filterChange(f)} active={isActive(f)} key={f}>
              {f}
            </Button>
          ))}
        </div>
        <DayChart data={windows} />
      </div>
    </Container>
  );
};
