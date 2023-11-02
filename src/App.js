import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./utils/notFound";
import { NavBar } from "./components/navigation/navBar";
import { LandingPage } from "./pages/LandingPage";
import ScrollToTop from "./utils/ScrollToTop";
import { Footer } from "./components/navigation/footer";
import { Assets } from "./pages/Assets";
import { Callback } from "./utils/auth0/callback";
import { AuthenticationGuard } from "./utils/auth0/authenticationGuard";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      {/* <Route exact path="/assets" element={<Assets />} /> */}
      <Route
        path="/assets"
        element={<AuthenticationGuard component={Assets} />}
      />
      <Route exact path="/*" element={<NotFound />} />
      <Route exact path="/callback" element={<Callback />} />
    </Routes>
  );
}

export default App;
