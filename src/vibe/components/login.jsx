import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Logout from './logout';

let baseURL = 'http://localhost:3003';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    
    const checkUser = () => {
        if (isAuthenticated)  {
            const email = user.email;
            fetch(baseURL + '/api/user', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then (res => res.json())
            .then (data => {
                console.log('this is the data:' , data);
            }).catch(error => console.error({ 'Error': error }));
        }
    } 

    useEffect(() => {
        checkUser();
    })

    return (
        isAuthenticated ? (
            console.log(user.email),
            <Logout />
        ) :  (<p onClick={() => loginWithRedirect()}>Log In</p>)
        
    )
};

export default LoginButton;