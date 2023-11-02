import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./utils/notFound";
import { NavBar } from "./components/navigation/navBar";
import { LandingPage } from "./pages/LandingPage";
import ScrollToTop from "./utils/ScrollToTop";
import { Footer } from "./components/navigation/footer";
import { Assets } from "./pages/Assets";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/assets" element={<Assets />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
