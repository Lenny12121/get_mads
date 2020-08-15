import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';

import history from "./utils/history.js";


export default function App() { 

  return (
    <Router history={history}>
      <Switch>
        <Route component={DashboardLayout} />
      </Switch>
    </Router>
  );
}
