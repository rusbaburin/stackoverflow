import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { PAGE } from './common/constants';

import { SearchPage } from './pages/Search';
import { ResultsPage } from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route exact path={`/${ PAGE.RESULTS }`} component={ResultsPage} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
