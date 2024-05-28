import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import WebContent from "./Content/WebContent";
const WebApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userID = Cookies.get("userID");
    const jwtToken = Cookies.get("jwtToken");

    if (userID && jwtToken) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <WebContent/>
      ) : (
        <div>
          <p>Your session has ended.</p>
          <Link to="/">Go back to the main page</Link>
        </div>
      )}
    </div>
  );
};

export default WebApp;
