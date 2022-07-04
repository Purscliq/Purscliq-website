import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import Terms from "./components/Terms&Conditions/Terms&Conditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
