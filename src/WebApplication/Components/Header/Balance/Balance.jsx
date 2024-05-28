import React, { useState, useEffect } from "react";
import balance from "../../../../Images/Icons/balance.png";

const Balance = ({ className }) => {
  return (
    <div className={className}>
      <span>5</span> <img src={balance} />
    </div>
  );
};

export default Balance;
