import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import LoadQuotes from './Quotes';
import PageError from './PageError';

const App = () => {
  const [active, setActive] = useState('home');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home active={active} setActive={setActive} />} />
          <Route path="calculator" element={<Calculator active={active} setActive={setActive} />} />
          <Route path="quotes" element={<LoadQuotes active={active} setActive={setActive} />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
