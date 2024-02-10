import '@/reactapp/utils/colors';
import '@/reactapp/utils/clamp';
import { Main } from '@/reactapp/components/layout';

import Overview from './pages/Overview';
import { ActiveWindowsProvider } from '@/reactapp/context/ActiveWindows';

function App() {
  return (
    <ActiveWindowsProvider>
      <Main>
        <Overview />
      </Main>
    </ActiveWindowsProvider>
  );
}

export default App;
