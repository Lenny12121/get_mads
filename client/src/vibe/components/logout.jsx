import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <p onClick={() => logout()} style={{ marginBottom: '0' }}>Log Out</p>;
};

export default LogoutButton;