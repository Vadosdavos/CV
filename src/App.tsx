import { useEffect, useState } from 'react';
import { Background } from './components/background/background';
import { Main } from './components/main/main';

function App() {
  const [isBgVisible, setSsBgVisible] = useState(false);
  useEffect(() => {
    const brackepoint = window.matchMedia('(max-width: 1200px)');
    if (brackepoint.matches) {
      setSsBgVisible(false);
    } else {
      setSsBgVisible(true);
    }
  }, []);
  return (
    <>
      {isBgVisible && <Background />}
      <Main />
    </>
  );
}

export default App;
