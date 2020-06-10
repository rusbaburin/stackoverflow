import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { PAGE } from './common/constants';

import { SearchPage } from './pages/Search';
import { ResultsPage } from './pages/Results';
import { ExplorePage } from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PAGE.SEARCH} component={SearchPage} />
        <Route exact path={`${ PAGE.RESULTS }`} component={ResultsPage} />
        <Route exact path={`${ PAGE.EXPLORE }/:id`} component={ExplorePage} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
