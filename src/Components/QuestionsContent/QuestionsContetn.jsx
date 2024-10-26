import React, { useState } from "react";
import styles from "./QuestionsContent.module.css"; 

const QuestionsContent = ({ questions }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    setOpenIndexes((prevIndexes) => 
      prevIndexes.includes(index) 
        ? prevIndexes.filter((i) => i !== index) 
        : [...prevIndexes, index]
    );
  };

  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.questionsTitle}>Questions & Answers</h1>
      <div className={styles.questionsWrapper}>
        {questions.map((question, index) => (
          <div 
            className={styles.questionElement} 
            key={index} 
            onClick={() => toggleAnswer(index)}
          >
            <span className={styles.questionName}>
              {index + 1}. {question.title}
              <button 
                className={styles.toggleButton} 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAnswer(index);
                }}
              >
                {openIndexes.includes(index) ? "−" : "+"}
              </button>
            </span>
            <div className={`${styles.answer} ${openIndexes.includes(index) ? styles.open : styles.closed}`}>
              {question.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsContent;
