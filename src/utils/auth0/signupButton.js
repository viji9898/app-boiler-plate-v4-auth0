import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import React from "react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return <Button onClick={handleSignUp}>Sign Up</Button>;
};
