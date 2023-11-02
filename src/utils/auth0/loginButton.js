import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return <Button onClick={handleLogin}>Log In</Button>;
};
