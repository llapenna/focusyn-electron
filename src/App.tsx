import { useEffect, useState } from 'react';

import '@/reactapp/utils/colors';

import activeWindow from '@/reactapp/services/activeWindow';
import { Main } from '@/reactapp/components/layout';

import { ActiveWindow } from '@/shared/types/activeWindow';
import { DayChart } from './components/charts/DayChart';

function App() {
  const [count, setCount] = useState<ActiveWindow.Result[]>([]);

  useEffect(() => {
    activeWindow.subscribe((_, window) => {
      if (window)
        setCount((state) => {
          return [...state, window];
        });
      void window;
    });
  }, []);

  const grouped = activeWindow.groupBy(count, {
    by: 'owner.name',
    consecutive: true,
  });

  return (
    <Main>
      {/* <ChartContainer windows={count}></ChartContainer> */}
      {/* <button onClick={addData}>add</button> */}
      <DayChart data={grouped}></DayChart>
    </Main>
  );
}

export default App;
