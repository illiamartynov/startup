import "./App.css";
import React from 'react';
import Questions from "./Pages/QandAPage/Qustions";
import MainPage from "./Pages/MainPage/MainPage";
import EmailVer from "./Components/EmailVerification/EmailVer";
import WebApp from "./WebApplication/WebApp"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/q&a" element={<Questions />} />
        <Route path="/email/verification" element={<EmailVer />} />
        <Route path="/application" element={<WebApp />} />
      </Routes>
    </Router>
  );
}

export default App;