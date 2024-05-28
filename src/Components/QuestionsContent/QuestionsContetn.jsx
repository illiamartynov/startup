import React from "react";
import styles from "./QuestionsContent.module.css"; 

const QuestionsContent = ({ questions }) => {
  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.questionsTitle}>Questions & Answers</h1>
      <div className={styles.questionsWrapper}>
        {questions.map((question, index) => (
          <div className={styles.questionElement} key={index}>
            <span className={styles.questionName}>{index + 1}.{question.title}</span>
            <div className={styles.answer}>{question.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsContent;
