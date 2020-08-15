import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';

import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history.js";


let baseURL = 'http://localhost:3003';

export default function App() { 
  
  const user = useAuth0();

  useEffect(() => {
    const checkUser = () => {
      console.log(user)
    } 
    checkUser()
  })

  return (
    <Router history={history}>
      <Switch>
        <Route component={DashboardLayout} />
      </Switch>
    </Router>
  );
}
