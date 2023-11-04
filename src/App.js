import "./App.css";

import { Routes, Route } from "react-router-dom";
import { NotFound } from "./utils/notFound";
import { LandingPage } from "./pages/LandingPage";
import { Assets } from "./pages/Assets";
import { Callback } from "./utils/auth0/callback";
import { AuthenticationGuard } from "./utils/auth0/authenticationGuard";
import { ProfilePage } from "./pages/Profile";
import { Auth0ContextProvider } from "./utils/auth0/auth0Context";

function App() {
  return (
    <Auth0ContextProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route exact path="/assets" element={<Assets />} /> */}
        <Route
          path="/assets"
          element={<AuthenticationGuard component={Assets} />}
        />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/callback" element={<Callback />} />
      </Routes>
    </Auth0ContextProvider>
  );
}

export default App;
