import React, { useState, useEffect } from "react";
import styles from "./WebContent.module.css"
import Header from "../Components/Header/Header"
import RenderingZone from "../RenderingZone/RenderingZone";

const WebContent = () => {
  
  return (
    <div className={styles.background}>
      {/* <Header/> */}
      <RenderingZone/>
    </div>
  );
};

export default WebContent;
