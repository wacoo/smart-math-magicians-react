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

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quotes" element={<LoadQuotes />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
);

export default App;
