import { useState, useEffect, createContext } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // initialize netlify identity
    netlifyIdentity.init();
  }, []);

  useEffect(() => {
    // update user state on init event
    netlifyIdentity.on("init", (user) => {
      setUser(user);
    });
  }, []);

  netlifyIdentity.on("login", (user) => {
    netlifyIdentity.close();
    setUser(user);
    console.log("login event - user:", user);
  });
  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close();
    setUser(null);
    console.log("logout event - user:", user);
  });

  const contextValues = { user };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
