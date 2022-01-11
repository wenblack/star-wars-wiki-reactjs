import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FilmsPage } from './pages/FIlmsPage';
import { HomePage } from './pages/Home';
import { VehiclesPage } from './pages/VehiclesPage';
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/films" exact component={FilmsPage} />
      <Route path="/vehicles" exact component={VehiclesPage} />
    </Switch>
  </BrowserRouter>
);

export default App;