import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
      {/* <Redirect to='/home' /> */}
      <div className="m-t-xxl text-center">
        <h1 className="error-number">404</h1>
        <h3 className="m-b">Sorry but we couldnt find this page. It doesn't exist!</h3>
        <NavLink to={'/home'}>Go Home!</NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
