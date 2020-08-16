import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './registerServiceWorker';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

require('dotenv').config();

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    <Auth0Provider
        domain='get-mads.eu.auth0.com'
        clientId='NlxMZ2eLSHr1brBFb0SFsD0wwWDiaqwM'
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('app')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
