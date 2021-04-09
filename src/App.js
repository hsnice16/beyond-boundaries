import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProgramsDirectoryPage from './pages/programsDirectory';
import ProgramDetailsPage from './pages/programDetails';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.PROGRAMS_DIRECTORY} component={ProgramsDirectoryPage} />
        <Route path={`${ROUTES.PROGRAM_DETAILS}/:id`} component={ProgramDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
