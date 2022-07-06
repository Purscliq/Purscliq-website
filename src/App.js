import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import TermsConditions from "./components/Terms&Conditions/Terms&Conditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
