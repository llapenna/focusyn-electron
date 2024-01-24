// import { useEffect, useState } from 'react';

import '@/reactapp/utils/colors';

// import activeWindow from '@/reactapp/services/activeWindow';
// import { ChartContainer } from '@/reactapp/components/charts';
import { Main } from '@/reactapp/components/layout';

// import { ActiveWindow } from '@/shared/types/activeWindow';
import { DayChart } from './components/charts/DayChart';

// import {data as defaultData} from './components/charts/POC/defaults';
// import { Data, generateRandomData } from './components/charts/POC/mockData';

function App() {
  // const [count, setCount] = useState<ActiveWindow.Result[]>([]);
  // const [data, setData] = useState<Data[]>(defaultData);

  // useEffect(() => {
  //   activeWindow.subscribe((_, window) => {
  //     if (window)
  //       setCount((state) => {
  //         return [...state, window];
  //       });
  //     void window;
  //   });
  // }, []);

  // const addData = () => {
  //   setData((d) => [...d, generateRandomData(d.length + 1)]);
  // };

  return (
    <Main>
      {/* <ChartContainer windows={count}></ChartContainer> */}
      {/* <button onClick={addData}>add</button> */}
      <DayChart data={[]}></DayChart>
    </Main>
  );
}

export default App;
