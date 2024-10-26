import React from "react";
import styles from "../../Wizija/WizjaContent/WizjaContent.module.css";

const AboutUs = ({ info }) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.questionsWrapper}>
        {info.map((question, index) => (
          <div className={styles.questionElement} key={index}>
            <div className={styles.answer}>
              <div className={styles.qaaa}>
                <div
                  className={`${styles.qaContentWrapper} ${
                    index % 2 === 1 ? styles.flipped : ""
                  }`}
                >
                  <div className={styles.helpDiv}>
                    <span className={styles.questionName}>
                      {question.title}

                    </span>
                    <span>{question.subtitle}</span>
                  <img className={styles.mobPhoto} src={question.image} />

                    <span>{question.text}</span>
                  </div>
                  <img className={styles.webPhoto} src={question.image} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
