import { useEffect, useState } from 'react';
import './App.css';

import '@/reactapp/utils/colors';

import activeWindow from '@/reactapp/services/activeWindow';
import { Doughnut, Stacked } from '@/reactapp/components/charts';
import { getFormattedTime } from '@/reactapp/utils/time';

import { ActiveWindow } from '@/shared/types/activeWindow';

function App() {
  const [count, setCount] = useState<ActiveWindow.Result[]>([]);
  const total = activeWindow.getTotalTime(count);
  const formattedTotal = getFormattedTime(total, 's');

  useEffect(() => {
    activeWindow.subscribe((_, window) => {
      if (window)
        setCount((state) => {
          return [...state, window];
        });
    });
  }, []);

  return (
    <main>
      <h1>Active Window</h1>
      <h2>Total: {formattedTotal}</h2>
      <Doughnut
        data={activeWindow.groupBy(count, {
          by: 'owner.name',
          consecutive: false,
        })}
      ></Doughnut>
      <Stacked
        data={activeWindow.groupBy(count, {
          by: 'owner.name',
          consecutive: true,
        })}
      ></Stacked>
    </main>
  );
}

export default App;
