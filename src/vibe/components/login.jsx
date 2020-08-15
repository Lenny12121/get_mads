import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from './logout';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    return (
        isAuthenticated ? (
            console.log(user),
            <Logout />
        ) :  (<p onClick={() => loginWithRedirect()}>Log In</p>)
        
    )
};

export default LoginButton;