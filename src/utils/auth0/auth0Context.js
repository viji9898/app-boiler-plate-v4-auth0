import React, { useState, useEffect, createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const Auth0Context = createContext({});

export const Auth0ContextProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userProfile, setUserProfile] = useState({
    profileData: {
      experience: [],
      technologies: [],
      roleType: [],
      cvFileUpload: { file: "" },
    },
  });

  useEffect(() => {
    const userId = user?.sub;
    isAuthenticated &&
      axios
        .get(".netlify/functions/getProfile", {
          params: { userId },
          baseURL: "/",
        })
        .then(function (response) {
          setUserProfile(response.data);
        })
        .catch(function (error) {
          const errorMessage = error.response.data;
          console.log(errorMessage);
        });
  }, [user?.sub, isAuthenticated]);

  const context = {
    user,
    userProfile,
    setUserProfile,
    isAuthenticated,
  };

  return (
    <Auth0Context.Provider value={context}>{children}</Auth0Context.Provider>
  );
};

export default Auth0Context;
