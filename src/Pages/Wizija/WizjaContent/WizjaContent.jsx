import React from "react";
import styles from "./WizjaContent.module.css";

const QuestionsContent = ({ questions }) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.questionsWrapper}>
        {questions.map((question, index) => (
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
                    <span>{question.text}</span>
                  </div>
                  <img src={question.image} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsContent;
