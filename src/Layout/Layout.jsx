import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import CookiesWindow from "../Cookies/CookiesWindow";
import Footer from "../Components/Footer/Footer";
const Layout = ({ children, page }) => {
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const galleryElement = document.getElementById("gallery");
      
      if (galleryElement) {
        const galleryPosition = galleryElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const galleryHeight = galleryElement.offsetHeight;
        const visibleHeight = windowHeight - galleryPosition;
        const visiblePercentage = (visibleHeight / galleryHeight) * 100;
        const opacity = 1 - visiblePercentage / 90;
        setHeaderOpacity(opacity < 0 ? -opacity : opacity);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} opacity={headerOpacity} page={page}/>
      <main>{children}</main>
      <Footer />
      <CookiesWindow />
    </div>
  );
};

export default Layout;
