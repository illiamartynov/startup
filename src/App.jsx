import "./App.css";
import React from 'react';
import Questions from "./Pages/QandAPage/Qustions";
import MainPage from "./Pages/MainPage/MainPage";
import EmailVer from "./Components/EmailVerification/EmailVer";
import WebApp from "./WebApplication/WebApp"
import Wizja from "./Pages/Wizija/Wizja";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import i18next from "../i18n.js";
import PayementPage from "./Pages/Payement/PayementPage";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/q&a" element={<Questions />} />
        <Route path="/wizja" element={<Wizja />} />
        <Route path="/email/verification" element={<EmailVer />} />
        <Route path="/application" element={<WebApp />} />
        <Route path="/payement" element={<PayementPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />

      </Routes>
    </Router>
  );
}

export default App;