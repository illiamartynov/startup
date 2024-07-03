import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";
import emailjs from "emailjs-com";
import send from "../../Images/Icons/sendNew.png";

const Input = ({ data, showApproved }) => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [containerHeight, setContainerHeight] = useState("");

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const handleFocus = (field) => {
    setActiveField(field);
  };
  const handleBlur = () => {
    setActiveField(null);
  };
  useEffect(() => {
    const updateContainerHeight = () => {
      const width = window.innerWidth;
      if (width >= 1300) {
        if(data.fields.length === 3){
          setContainerHeight(`calc(600 / 1200 * 100vmin)`);
        }else{
          setContainerHeight(`calc(100 / 1200 * 100vmin)`);
        }
      } else {
        if(data.fields.length === 3){
          setContainerHeight(`calc(250 / 400 * 100vmin)`);
        }else{
          setContainerHeight(`calc(70 / 400 * 100vmin)`);
        }
        
      }
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, [data.fields.length]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = formData.email ? formData.email.trim() : "";

    if (trimmedEmail === "") {
      setErrorMessage("Enter valid Email");
      return;
    }

    const contactNumber = Math.floor(Math.random() * 100000);
    const templateParams = {
      contact_number: contactNumber,
      email: trimmedEmail,
    };
    const newTemplateParams = { ...templateParams };
    data.fields.forEach((field) => {
      if (field !== "contact_number" && field !== "email") {
        newTemplateParams[field] = formData[field];
      }
    });

    emailjs
      .send(
        "service_8569tue",
        "template_ydjs158",
        newTemplateParams,
        "Luj1i-dPnuPW2YEx4"
      )
      .then(
        function (response) {
          if (response.status === 200) {
            showApproved(true);
          }
        },
        function (error) {
          console.log("Failed to send email:", error);
        }
      );

    setFormData({});
  };

  return (
    <div className={styles.outerWrapper}>
      <h1>{data.title}</h1>
      <div className={styles.formWrapper}>
        <form className={styles.formSender} onSubmit={handleSubmit}>
          <div className={styles.btnWrapper} style={{ height: containerHeight }}>
            {data.fields.map((field, index) => (
              <div className={styles.inputContainer} key={index}>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={formData[field] || ""}
                  onChange={(e) => handleChange(e, field)}
                  onFocus={() => handleFocus(field)}
                  onBlur={handleBlur}
                  className={styles.input}
                />

                <label
                  className={
                    activeField === field || formData[field]
                      ? styles.labelFocused
                      : styles.label
                  }
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
            <button className={styles.sendBtn} type="submit">
              <img src={send} alt="send" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
