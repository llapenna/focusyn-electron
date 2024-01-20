import { useEffect, useState } from 'react';

import '@/reactapp/utils/colors';

import activeWindow from '@/reactapp/services/activeWindow';
import { ChartContainer } from '@/reactapp/components/charts';
import { Main } from '@/reactapp/components/layout';

import { ActiveWindow } from '@/shared/types/activeWindow';

function App() {
  const [count, setCount] = useState<ActiveWindow.Result[]>([]);

  useEffect(() => {
    activeWindow.subscribe((_, window) => {
      if (window)
        setCount((state) => {
          return [...state, window];
        });
    });
  }, []);

  return (
    <Main>
      {/* <ChartContainer windows={count}></ChartContainer> */}
      <Chart></Chart>
    </Main>
  );
}

export default App;
