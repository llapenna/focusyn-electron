import { useEffect, useState } from 'react';
import './App.css';

import '@/reactapp/utils/colors';

import activeWindow from '@/reactapp/services/activeWindow';
import { Doughnut } from '@/reactapp/components/charts';
import { ActiveWindow } from '@/shared/types/activeWindow';

function App() {
  const [count, setCount] = useState<ActiveWindow.Result[]>([]);
  const total = activeWindow.getTotalTime(count);

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
      <h2>Total: {total}</h2>
      <Doughnut data={activeWindow.countByName(count)}></Doughnut>
    </main>
  );
}

export default App;
