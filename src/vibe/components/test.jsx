import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

let baseURL = 'http://localhost:3003';

const Test = (props) => {
    const { isAuthenticated, user } = useAuth0();
    
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
                // props.setUser(data);
            }).catch(error => console.error({ 'Error': error }));
        }
    } 

    useEffect(() => {
        checkUser();
    })

    return (
        <div>

        </div>
    )
};

export default Test;