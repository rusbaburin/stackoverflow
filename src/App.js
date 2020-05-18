import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { SearchPage } from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
