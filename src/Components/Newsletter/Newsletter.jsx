import React, { useState } from "react";
import styles from "./Newsletter.module.css";
import ApprovedWindow from "../ApprovedWindow/ApprovedWindow";
import logo from "../../Images/Icons/starsGold.png";
import Input from "../Input/Input";

const Newsletter = () => {
  const [showApproved, setShowApproved] = useState(false);

  const inputNewsletterData = {
    title: "Newsletter",
    fields: ["email"]
  };

  const inputKontaktData = {
    title: "Kontakt",
    fields: ["name", "email", "phone"]
  };

  return (
    <div className={styles.wrapper} pad={20} side={"all"}>
      <Input data={inputNewsletterData} showApproved={setShowApproved} />

      
      {showApproved && (
        <ApprovedWindow onClose={() => setShowApproved(false)} />
      )}
    </div>
  );
};

export default Newsletter;
